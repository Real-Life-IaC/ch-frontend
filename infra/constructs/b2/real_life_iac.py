from aws_cdk import aws_cloudfront as cloudfront
from constructs import Construct
from infra.constructs.b1.static_site import B1StaticSite
from infra.constructs.b1.static_site import HostedZoneType


class B2RealLifeIacStaticSite(Construct):
    """Real Life IaC Book Static Site"""

    def __init__(
        self,
        scope: Construct,
        id: str,
        hosted_zone_type: HostedZoneType,
    ) -> None:
        super().__init__(scope, id)

        B1StaticSite(
            scope=self,
            id="StaticSite",
            domain_name="real-life-iac.com",
            hosted_zone_type=hosted_zone_type,
            root_object="index.html",
            asset_path="./app/dist",
            error_responses=[
                cloudfront.ErrorResponse(
                    http_status=404,
                    response_http_status=200,
                    response_page_path="/index.html",
                ),
                cloudfront.ErrorResponse(
                    http_status=403,
                    response_http_status=200,
                    response_page_path="/index.html",
                ),
            ],
        )
