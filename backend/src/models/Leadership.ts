import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const LeadershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  bio: String,
  photo: String,
  order: { type: Number, default: 0 },
});

LeadershipSchema.add(BaseSchema);
export default mongoose.model("Leadership", LeadershipSchema);
