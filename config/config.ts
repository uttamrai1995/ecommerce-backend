import * as mongodb from "mongodb";

let mernClient:any  = mongodb.MongoClient;
let ObjectId:any = mongodb.ObjectId;

let obj:any = {
    "mernClient" : mernClient,
    "ObjectId"  : ObjectId
}
export default obj;
