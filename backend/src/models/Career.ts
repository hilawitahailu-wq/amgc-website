import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const CareerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  type: String,
  status: { type: String, enum: ["open", "closed"], default: "open" },
  description: String,
  applicationUrl: String,
});

CareerSchema.add(BaseSchema);
export default mongoose.model("Career", CareerSchema);
