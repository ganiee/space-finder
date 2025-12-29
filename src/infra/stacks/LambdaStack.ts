import { Stack, StackProps }from 'aws-cdk-lib';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { Code, Runtime, Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

interface LambdaStackProps extends StackProps {
    spacesTable: ITable
}


export class LambdaStack extends Stack {

    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props: LambdaStackProps) {
        super(scope, id, props)

        const helloLambda = new LambdaFunction(this, 'HelloHandler', {
            runtime: Runtime.NODEJS_18_X,
            code: Code.fromAsset('src/services'),
            handler: 'hello.main',
            environment: {
                SPACES_TABLE_NAME: props.spacesTable.tableName
            }
        });


        this.helloLambdaIntegration = new LambdaIntegration(helloLambda)
    }
}