import mongoose from "mongoose";

const URI =
  "mongodb+srv://jhantu31:7uicAl0YTEMCdMt7@cluster0.90wlo.mongodb.net/OYO?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB Connected..')
};
export default connectDB;