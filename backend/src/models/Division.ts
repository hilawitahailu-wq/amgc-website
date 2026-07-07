import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const DivisionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: String,
  iconImage: String,
  bannerImage: String,
  description: String,
});

DivisionSchema.add(BaseSchema);
export default mongoose.model("Division", DivisionSchema);
