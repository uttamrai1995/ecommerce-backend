// import modules 

import * as express from "express";
import * as cors from "cors";
import * as mongodb from "mongodb";
import * as bodyparser from "body-parser";

// create the rest object

let app:any = express();

app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

// create the get request

let first_dbClient:any = mongodb.MongoClient;

// get request

app.get("/api/first_users",(req:any,res:any)=>{
    first_dbClient.connect("mongodb://adminuttam:MongoAdminOfUttam@uttam-rai-shard-00-00.g5lpg.mongodb.net:27017,uttam-rai-shard-00-01.g5lpg.mongodb.net:27017,uttam-rai-shard-00-02.g5lpg.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-zb1b3s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true",(err:any,conn:any)=>{
          if (err) throw err;
          else{
              let db = conn.db("first_db");
              db.collection("first_users").find().toArray(
                  (err:any,array:any)=>{
                      if (err) throw err;
                      else{
                          res.send(array);
                      }
                  }
              );
          }
    });
});

// get the product based on id

let ObjectId:any = mongodb.ObjectId;

app.get("/api/first_users/:id",(req:any,res:any)=>{
    first_dbClient.connect("mongodb://adminuttam:MongoAdminOfUttam@uttam-rai-shard-00-00.g5lpg.mongodb.net:27017,uttam-rai-shard-00-01.g5lpg.mongodb.net:27017,uttam-rai-shard-00-02.g5lpg.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-zb1b3s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true",(err:any,conn:any)=>{
        let db:any = conn.db("first_db");
        try{
            db.collection("first_users").find({
                "_id": new ObjectId(req.params.id)}).toArray((err:any,array:any)=>{
                    if(array.length>0){
                        res.send(array[0]);
                    }else{
                        res.send({message:"product not available"});
                    }
                });
    } catch(error){
        res.send({message:"invalid productid"});
    }
});
});

// port 

let port:any = process.env.port || 8080;

app.listen(port,()=>{
    console.log("server started successfully");
});








