import { App } from 'aws-cdk-lib';
import { DataStack } from './stacks/DataStack';

console.log('launcher running');
    
const app = new App();

const datastack = new DataStack(app, 'DataStack');



