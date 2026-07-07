import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, required: true, default: "admin" },
  avatar: String,
  createdAt: { type: Date, default: () => new Date() },
});

export default mongoose.model("User", UserSchema);
