import { MongoClient, Db } from "mongodb";
import url from "url";

let cacheDb: Db = null;

export default async function connectToDatabase() {
  if (cacheDb) {
    return cacheDb;
  }

  const uri = process.env.MONGODB_URI;

  const client = await MongoClient.connect(uri);

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cacheDb = db;

  return db;
}
