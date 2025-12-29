import { Stack, StackProps }from 'aws-cdk-lib';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { Code, Runtime, Function as LambdaFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaStack extends Stack {

    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const helloLambda = new LambdaFunction(this, 'HelloHandler', {
            runtime: Runtime.NODEJS_18_X,
            code: Code.fromAsset('src/services'),
            handler: 'hello.main'
        });


        this.helloLambdaIntegration = new LambdaIntegration(helloLambda)
    }
}