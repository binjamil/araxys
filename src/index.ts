import * as engine from "./engine";
import config from "./araxys.config";
import { MongoClient } from "mongodb";

const main = async () => {
  const uri = "mongodb://127.0.0.1/araxys";
  const client = await connectMongo(uri);
  const db = client.db();
  const e = await engine.build({ config, db });
  
  const testResults = await e.find({collection: config.collections[0]});
  console.log(JSON.stringify(testResults, null, 2));
  process.exit();
};

const connectMongo = async (uri: string) => {
  let mongoClient: MongoClient;
  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB!");
    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB failed!", error);
    process.exit();
  }
};

main();
