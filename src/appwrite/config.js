import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("696d97c4000d1e9436a5");

export const account = new Account(client);
export const databases = new Databases(client);

export const DATABASE_ID = "696dad2c003135ccefc8";
export const PRIVATE_COLLECTION_ID = "private_logs";
export const PUBLIC_COLLECTION_ID = "public_logs";
export const EMERGENCY_COLLECTION_ID = "emergency_logs";
