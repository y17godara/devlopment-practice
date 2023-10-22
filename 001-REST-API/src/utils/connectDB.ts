// src/utils/connectDB.ts
import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connectDB = async () => {
  const DB_URL = config.get<string>("DB_URL");
  try {
    await mongoose.connect(DB_URL);
    log.info("MongoDB Connected");
  } catch (error) {
    log.info("MongoDB Connection Failed", { error });
    process.exit(1);
  }
};

export default connectDB;
