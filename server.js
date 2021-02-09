"use strict";
// import modules 
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var mongodb = require("mongodb");
var bodyparser = require("body-parser");
// create the rest object
var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// create the get request
var first_dbClient = mongodb.MongoClient;
// get request
app.get("/api/first_users", function (req, res) {
    first_dbClient.connect("mongodb://adminuttam:MongoAdminOfUttam@uttam-rai-shard-00-00.g5lpg.mongodb.net:27017,uttam-rai-shard-00-01.g5lpg.mongodb.net:27017,uttam-rai-shard-00-02.g5lpg.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-zb1b3s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true", function (err, conn) {
        if (err)
            throw err;
        else {
            var db = conn.db("first_db");
            db.collection("first_users").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
// get the product based on id
var ObjectId = mongodb.ObjectId;
app.get("/api/first_users/:id", function (req, res) {
    first_dbClient.connect("mongodb://adminuttam:MongoAdminOfUttam@uttam-rai-shard-00-00.g5lpg.mongodb.net:27017,uttam-rai-shard-00-01.g5lpg.mongodb.net:27017,uttam-rai-shard-00-02.g5lpg.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-zb1b3s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true", function (err, conn) {
        var db = conn.db("first_db");
        try {
            db.collection("first_users").find({
                "_id": new ObjectId(req.params.id)
            }).toArray(function (err, array) {
                if (array.length > 0) {
                    res.send(array[0]);
                }
                else {
                    res.send({ message: "product not available" });
                }
            });
        }
        catch (error) {
            res.send({ message: "invalid productid" });
        }
    });
});
// port 
var port = process.env.port || 8080;
app.listen(port, function () {
    console.log("server started successfully");
});
