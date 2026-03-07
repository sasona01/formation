const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "academy";

async function connectDB() {
  await client.connect();
  console.log("MongoDB connected");
  return client.db(dbName);
}

module.exports = connectDB;