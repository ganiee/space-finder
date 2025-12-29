import { handler } from "../src/services/hello";



handler({} as any, {} as any).then(response => {
    console.log("Lambda response:", response);
}); 
