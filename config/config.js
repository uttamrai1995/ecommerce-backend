"use strict";
exports.__esModule = true;
var mongodb = require("mongodb");
var first_dbClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;
var obj = {
    "first_dbClient": first_dbClient,
    "ObjectId": ObjectId
};
exports["default"] = obj;
