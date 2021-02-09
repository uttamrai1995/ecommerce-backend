"use strict";
exports.__esModule = true;
var config_1 = require("../config/config");
var db_password = "MongoAdminOfUttam";
var db_name = "first_db";
var db_collection = "db_users";
var db_url = "mongodb://adminuttam:MongoAdminOfUttam@uttam-rai-shard-00-00.g5lpg.mongodb.net:27017,uttam-rai-shard-00-01.g5lpg.mongodb.net:27017,uttam-rai-shard-00-02.g5lpg.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-zb1b3s-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";
function getConnection() {
    try {
        return config_1["default"].first_dbClient.connect(db_url);
    }
    catch (_a) {
        console.log("connection failed");
    }
}
exports["default"] = getConnection;
;
