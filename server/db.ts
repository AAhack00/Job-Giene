import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  console.error("❌ FATAL: MONGODB_URI environment variable is not set.");
  process.exit(1);
}

export async function connectDB(): Promise<void> {
  try {
    console.log("=================================");
    console.log("Connecting to MongoDB Atlas...");
    console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
    console.log("URI length:", process.env.MONGODB_URI?.length);
    console.log("=================================");

    await mongoose.connect(MONGODB_URI, {
      dbName: "jobgiene",
    });

    console.log("✅ Connected to MongoDB Atlas successfully!");
    console.log(`📦 Database: ${mongoose.connection.db?.databaseName}`);

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected.");
    });

  } catch (error) {
    console.error("❌ MongoDB Atlas connection failed:", error);
    process.exit(1);
  }
}

export default mongoose;
