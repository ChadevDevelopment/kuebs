import mongoose from 'mongoose';
import { MongoClient, Db } from 'mongodb';

let isConnected: boolean = false;
let mongoClient: MongoClient | null = null;
let db: Db | null = null;

export const connectToDatabase = async (): Promise<{ client: MongoClient, db: Db }> => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    // console.log('No MongoDB URL found');
    throw new Error('No MongoDB URL found');
  }

  if (isConnected && mongoClient && db) {
    console.log('MongoDB is already connected');
    return { client: mongoClient, db };
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'chadev',
    });

    mongoClient = new MongoClient(process.env.MONGODB_URL);
    await mongoClient.connect();
    db = mongoClient.db('chadev');

    isConnected = true;
    console.log('MongoDB connected');
    return { client: mongoClient, db };
  } catch (error) {
    console.log('MongoDB connection error', error);
    throw error;
  }
};