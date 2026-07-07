import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const PartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  website: String,
  logo: String,
  description: String,
});

PartnerSchema.add(BaseSchema);
export default mongoose.model("Partner", PartnerSchema);
