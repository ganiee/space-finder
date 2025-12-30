import { handler } from "../src/services/spaces/handler";


// handler({} as any, {} as any).then(response => {
//     console.log("Lambda response:", response);
// }); 

process.env.TABLE_NAME = 'SpaceTable-064b1b71a08f';
process.env.AWS_REGION = 'us-east-2';

// handler({
//     httpMethod: 'POST',
//     body: JSON.stringify({
//          location: 'edison'
//     })
// } as any, {} as any).then(response => {
//    console.log("Lambda response:", response);
// }); 

handler({
    httpMethod: 'GET',
   
} as any, {} as any).then(response => {
   console.log("Lambda response:", response);
}); 
