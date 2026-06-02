export async function connectDB(): Promise<void> {
  try {
    console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
    console.log("URI length:", process.env.MONGODB_URI?.length);

    await mongoose.connect(MONGODB_URI, {
      dbName: "jobgiene",
    });

    console.log("✅ Connected to MongoDB Atlas successfully!");
    console.log(`Database: ${mongoose.connection.db?.databaseName}`);

  } catch (error) {
    console.error("❌ MongoDB Atlas connection failed:", error);
    process.exit(2);
  }
}
