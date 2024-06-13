import { MongoClient } from "mongodb";

async function connect() {
  const client = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/shopping"
  );

  console.log("Connected.");

  return client.db();
}

const db = { connect };

export default db;
