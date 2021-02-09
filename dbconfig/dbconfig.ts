import obj from "../config/config";

const db_password:string = "MongoAdminOfUttam";
const db_name = "mern";
const db_collection = "products";

const db_url:string = "mongodb://adminuttam:MongoAdminOfUttam@uttam-rai-shard-00-00.g5lpg.mongodb.net:27017,uttam-rai-shard-00-01.g5lpg.mongodb.net:27017,uttam-rai-shard-00-02.g5lpg.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-zb1b3s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";


export default function getConnection(){
    try{
            return obj.mernClient.connect(db_url);
    }catch{
             console.log("connection failed");
    }
};

