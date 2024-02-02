import aws_cdk as cdk

from constructs import Construct


class FrontendStack(cdk.Stack):
    """Create the frontend resources"""

    def __init__(
        self,
        scope: Construct,
        id: str,
        **kwargs,
    ) -> None:
        super().__init__(scope, id, **kwargs)

        # Add tags to everything in this stack
        cdk.Tags.of(self).add(key="owner", value="Frontend")
        cdk.Tags.of(self).add(key="repo", value="ch-frontend")
        cdk.Tags.of(self).add(key="stack", value=self.stack_name)
