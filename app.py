import aws_cdk as cdk

from constructs_package.constants import AwsAccountId
from constructs_package.constants import AwsRegion
from constructs_package.constants import AwsStage
from infra.constructs.b1.static_site import HostedZoneType
from infra.stack import FrontendStack


app = cdk.App()

FrontendStack(
    scope=app,
    id=f"Frontend-{AwsStage.SANDBOX}",
    env=cdk.Environment(
        account=AwsAccountId.SANDBOX, region=AwsRegion.US_EAST_1
    ),
    hosted_zone_type=HostedZoneType.PRIVATE,
)

FrontendStack(
    scope=app,
    id=f"Frontend-{AwsStage.STAGING}",
    env=cdk.Environment(
        account=AwsAccountId.STAGING, region=AwsRegion.US_EAST_1
    ),
    hosted_zone_type=HostedZoneType.PRIVATE,
)

FrontendStack(
    scope=app,
    id=f"Frontend-{AwsStage.PRODUCTION}",
    env=cdk.Environment(
        account=AwsAccountId.PRODUCTION, region=AwsRegion.US_EAST_1
    ),
    hosted_zone_type=HostedZoneType.PUBLIC,
)

app.synth()
