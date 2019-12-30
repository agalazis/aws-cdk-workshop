#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkWorkshop1Stack } from '../lib/cdk-workshop1-stack';

const app = new cdk.App();
new CdkWorkshop1Stack(app, 'CdkWorkshop1Stack');