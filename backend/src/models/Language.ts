import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const LanguageSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  active: { type: Boolean, default: true },
  default: { type: Boolean, default: false },
});

LanguageSchema.add(BaseSchema);
export default mongoose.model("Language", LanguageSchema);
