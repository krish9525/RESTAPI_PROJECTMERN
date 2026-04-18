import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL || process.env.MONGO_URI;

try{
    await mongoose.connect(MONGO_URL);
    console.log(`MongoDB connected successfully on ${mongoose.connection.host}`);

}catch(err){
  console.error("Error connecting to MongoDB:", err);
  // process.exit(1); // Commented out to prevent server crash
}

};

export default connectDB;
