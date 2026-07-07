import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  division: String,
  location: String,
  status: { type: String, enum: ["planning", "active", "completed"], default: "planning" },
  summary: String,
  details: String,
  coverImage: String,
  gallery: [String],
});

ProjectSchema.add(BaseSchema);
export default mongoose.model("Project", ProjectSchema);
