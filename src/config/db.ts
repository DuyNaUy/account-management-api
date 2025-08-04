import mongoose from "mongoose";

export const connectDB = async () => {
  const url = process.env.MONGO_URL || "mongodb://localhost:27017/mydb";
  try {
    await mongoose.connect(url);
    console.log("Ket noi db thanh cong");
  } catch (err) {
    console.error("Ket noi db that bai", err);
    process.exit(1);
  }
};
