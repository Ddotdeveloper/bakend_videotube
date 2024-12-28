import mongoose from "mongoose";
import dbName from "../constants.js";

const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(`${process.env.MONGO_URI}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(connectionResponse.connection.host);
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
    throw err; // Optionally rethrow the error for further handling
  }
};



export default connectDB;