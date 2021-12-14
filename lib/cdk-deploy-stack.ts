import { Stack, StackProps, Construct } from "@aws-cdk/core";
import { NextJSLambdaEdge } from "@sls-next/cdk-construct";

export class CdkDeployStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new NextJSLambdaEdge(this, "NextJsApp", {
      serverlessBuildOutDir: "./build",
    });
  }
}
