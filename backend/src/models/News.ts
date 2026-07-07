import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: () => new Date() },
  excerpt: String,
  body: String,
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  heroImage: String,
  tags: [String],
});

NewsSchema.add(BaseSchema);
export default mongoose.model("News", NewsSchema);
