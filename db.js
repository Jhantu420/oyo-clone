import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose.connect(URI);
  console.log('DB Connected..')
};
export default connectDB;