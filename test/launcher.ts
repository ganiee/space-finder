import { handler } from "../src/services/spaces/handler";


process.env.AWS_REGION = 'us-east-2';
process.env.TABLE_NAME = 'SpaceTable-064b1b71a08f';


handler({
    httpMethod: 'POST',
    body: JSON.stringify({
         location: 'new jersey'
    })
} as any, {} as any);
