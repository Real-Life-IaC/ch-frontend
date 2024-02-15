from enum import StrEnum
from typing import TypedDict

import aws_cdk as cdk

from aws_cdk import aws_certificatemanager as acm
from aws_cdk import aws_cloudfront as cloudfront
from aws_cdk import aws_cloudfront_origins as origins
from aws_cdk import aws_iam as iam
from aws_cdk import aws_route53 as route53
from aws_cdk import aws_route53_targets as targets
from aws_cdk import aws_s3 as s3
from aws_cdk import aws_s3_deployment as s3deploy
from aws_cdk import aws_ssm as ssm
from constructs import Construct
from typing_extensions import NotRequired
from typing_extensions import Unpack


class HostedZoneType(StrEnum):
    """The type of hosted zone."""

    PRIVATE = "private"
    PUBLIC = "public"


class Params(TypedDict):
    """Parameters for the StaticSite class."""

    domain_name: str
    asset_path: str
    hosted_zone_type: NotRequired[HostedZoneType]
    root_object: NotRequired[str]
    error_responses: NotRequired[list[cloudfront.ErrorResponse]]


class B1StaticSite(Construct):
    """
    S3 Static Site

    Data is stored in a non-public S3 bucket and content is distributed via Cloudfront.
    """

    def __init__(
        self,
        scope: Construct,
        id: str,
        **kwargs: Unpack[Params],
    ) -> None:
        super().__init__(scope, id)

        # Read the kwargs
        asset_path = kwargs.get("asset_path")
        domain_name = kwargs.get("domain_name")
        root_object = kwargs.get("root_object") or "index.html"
        error_responses = kwargs.get("error_responses") or []
        hosted_zone_type = kwargs.get("hosted_zone_type") or "private"

        # -----------------
        # Import from SSM
        # -----------------

        # Import the hosted zone name and id from SSM
        hosted_zone_name = ssm.StringParameter.value_for_string_parameter(
            scope=self,
            parameter_name=f"/platform/dns/{domain_name}/{hosted_zone_type}-hosted-zone/name",
        )
        hosted_zone_id = ssm.StringParameter.value_for_string_parameter(
            scope=self,
            parameter_name=f"/platform/dns/{domain_name}/{hosted_zone_type}-hosted-zone/id",
        )

        # Use the default WAF Web ACL defined in platform
        waf_web_acl_arn = ssm.StringParameter.value_for_string_parameter(
            scope=self,
            parameter_name="/firewall/cloudfront-web-acl/arn",
        )

        # Get the access logs bucket ARN from SSM
        access_logs_bucket_arn = (
            ssm.StringParameter.value_for_string_parameter(
                scope=self,
                parameter_name="/platform/access-logs/bucket/arn",
            )
        )

        # Get the certificate ARN from SSM
        certificate_arn = ssm.StringParameter.value_for_string_parameter(
            scope=self,
            parameter_name=f"/platform/dns/{domain_name}/{hosted_zone_type}-hosted-zone/certificate/arn",
        )

        # -----------------
        # Instantiate existing constructs
        # -----------------

        access_logs_bucket = s3.Bucket.from_bucket_arn(
            scope=scope,
            id="AccessLogsBucket",
            bucket_arn=access_logs_bucket_arn,
        )

        self.hosted_zone = route53.HostedZone.from_hosted_zone_attributes(
            scope=self,
            id="HostedZone",
            hosted_zone_id=hosted_zone_id,
            zone_name=hosted_zone_name,
        )

        certificate = acm.Certificate.from_certificate_arn(
            scope=self,
            id="Certificate",
            certificate_arn=certificate_arn,
        )

        # -----------------
        # Create resources
        # -----------------

        self.cloudfront_oai = cloudfront.OriginAccessIdentity(
            scope=self,
            id="CloudfrontOai",
        )

        self.bucket = s3.Bucket(
            scope=self,
            id="Bucket",
            encryption=s3.BucketEncryption.S3_MANAGED,
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
            versioned=True,
            object_ownership=s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
            server_access_logs_bucket=access_logs_bucket,
            server_access_logs_prefix=f"S3Logs/StaticSite/{domain_name}/",
            removal_policy=cdk.RemovalPolicy.RETAIN,
        )

        self.bucket.add_lifecycle_rule(
            abort_incomplete_multipart_upload_after=cdk.Duration.days(
                amount=1
            ),
            noncurrent_version_expiration=cdk.Duration.days(amount=30),
        )

        # Allow CloudFront OAI to read from the bucket
        self.bucket.add_to_resource_policy(
            permission=iam.PolicyStatement(
                actions=["s3:GetObject"],
                resources=[self.bucket.arn_for_objects(key_pattern="*")],
                principals=[
                    iam.CanonicalUserPrincipal(
                        self.cloudfront_oai.cloud_front_origin_access_identity_s3_canonical_user_id
                    )
                ],
            )
        )

        self.distribution = cloudfront.Distribution(
            scope=self,
            id="Distribution",
            certificate=certificate,
            default_root_object=root_object,
            domain_names=[
                self.hosted_zone.zone_name,
                f"www.{self.hosted_zone.zone_name}",
            ],
            minimum_protocol_version=cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
            error_responses=error_responses,
            enable_logging=True,
            web_acl_id=waf_web_acl_arn,
            log_bucket=access_logs_bucket,
            log_file_prefix=f"CloudFrontDistibutionLogs/{domain_name}/",
            log_includes_cookies=True,
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(
                    bucket=self.bucket,
                    origin_access_identity=self.cloudfront_oai,
                    connection_timeout=cdk.Duration.seconds(amount=2),
                ),
                compress=True,
                cache_policy=cloudfront.CachePolicy.CACHING_OPTIMIZED,
                allowed_methods=cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
        )

        route53.ARecord(
            scope=self,
            id="ARecord",
            record_name=self.hosted_zone.zone_name,
            target=route53.RecordTarget.from_alias(
                alias_target=targets.CloudFrontTarget(self.distribution)
            ),
            zone=self.hosted_zone,
        )

        route53.CnameRecord(
            scope=self,
            id="CnameRecord",
            domain_name=self.hosted_zone.zone_name,
            record_name=f"www.{self.hosted_zone.zone_name}",
            zone=self.hosted_zone,
        )

        s3deploy.BucketDeployment(
            scope=self,
            id="BucketDeployment",
            sources=[s3deploy.Source.asset(asset_path)],
            destination_bucket=self.bucket,
            distribution=self.distribution,
            distribution_paths=["/*"],
            prune=True,
        )

        ssm.StringParameter(
            scope=self,
            id="BucketName",
            parameter_name=f"/frontend/static-site/{domain_name}/bucket/name",
            string_value=self.bucket.bucket_name,
            description="The name of the S3 bucket for the static site",
        )

        ssm.StringParameter(
            scope=self,
            id="CloudfrontDistributionId",
            parameter_name=f"/frontend/static-site/{domain_name}/cloudfront/distribution/id",
            string_value=self.distribution.distribution_id,
            description="The ID of the CloudFront distribution for the static site",
        )
