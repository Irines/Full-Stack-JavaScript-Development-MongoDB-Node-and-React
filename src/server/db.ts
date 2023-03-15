import { MongoClient } from "mongodb";
import { DATABASE_NAME, MONGODB_URI } from "./config";

let connectedClient;

// cashed client create function
export const connectClient = async () => {
  if (connectedClient) {
    return connectedClient.db(DATABASE_NAME);
  }
  const client = new MongoClient(MONGODB_URI);
  // async call
  await client.connect();
  await client.db(DATABASE_NAME).command({ ping: 1 });
  console.info("Connected to MongoDB");
  connectedClient = client;
  return connectedClient.db(DATABASE_NAME);
};

export const stopClient = async () => {
    await connectedClient?.close();
};
