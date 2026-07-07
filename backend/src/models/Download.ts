import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const DownloadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  type: String,
  size: String,
  url: String,
});

DownloadSchema.add(BaseSchema);
export default mongoose.model("Download", DownloadSchema);
