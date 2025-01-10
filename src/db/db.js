import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Replace this with your MongoDB connection string
const MONGODB_URI = `mongodb+srv://weularity:weularityclients@clients.5g84u.mongodb.net/customers?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `\n MongoDB connected ~~ DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;

