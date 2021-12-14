#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { CdkDeployStack } from "../lib/cdk-deploy-stack";

const app = new App();
new CdkDeployStack(app, "CdkDeployStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

export default app;
