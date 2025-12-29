import { App } from 'aws-cdk-lib';
import { DataStack } from './stacks/DataStack';
import { LambdaStack } from './stacks/LambdaStack';

console.log('launcher running');
    
const app = new App();

const datastack = new DataStack(app, 'DataStack');
const lambdaStack = new LambdaStack(app, 'LambdaStack');


