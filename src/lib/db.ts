import db from "@/lib/mongodb.config";
import { MongoClient, Db } from "mongodb";
/**
 * Get the MongoDB database instance
 * Ensures a single connection and avoids repetition in actions
 */
export const getDatabase = async (): Promise<Db> => {
  const client: MongoClient = await db; 
  return client.db(); 
};
