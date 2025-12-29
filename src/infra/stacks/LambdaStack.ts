import { Stack, StackProps }from 'aws-cdk-lib';
import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { Code, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

interface LambdaStackProps extends StackProps {
    spacesTable: ITable
}


export class LambdaStack extends Stack {

    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props: LambdaStackProps) {
        super(scope, id, props)

        const helloLambda = new NodejsFunction(this, 'HelloHandler', {
            runtime: Runtime.NODEJS_18_X,
            entry: 'src/services/hello.ts',
            handler: 'handler',
            environment: {
                SPACES_TABLE_NAME: props.spacesTable.tableName
            }
        });
        helloLambda.addToRolePolicy(new PolicyStatement({
            effect: Effect.ALLOW,
            actions: [
             's3:ListAllMyBuckets',
             's3:ListBucket'
            ],
            resources: ['*'] //bad practive, but for demo purposes
        }));


        this.helloLambdaIntegration = new LambdaIntegration(helloLambda)
    }
}