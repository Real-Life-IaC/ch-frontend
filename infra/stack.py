import aws_cdk as cdk

from constructs import Construct
from infra.constructs.b1.static_site import HostedZoneType
from infra.constructs.b2.real_life_iac import B2RealLifeIacStaticSite


class FrontendStack(cdk.Stack):
    """Create the frontend resources"""

    def __init__(
        self,
        scope: Construct,
        id: str,
        hosted_zone_type: HostedZoneType,
        **kwargs,
    ) -> None:
        super().__init__(scope, id, **kwargs)

        B2RealLifeIacStaticSite(
            scope=self,
            id="RealLifeIac",
            hosted_zone_type=hosted_zone_type,
        )

        # Add tags to everything in this stack
        cdk.Tags.of(self).add(key="owner", value="Frontend")
        cdk.Tags.of(self).add(key="repo", value="ch-frontend")
        cdk.Tags.of(self).add(key="stack", value=self.stack_name)
