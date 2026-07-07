import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const SettingSchema = new mongoose.Schema({
  companyName: String,
  companyLogo: String,
  email: String,
  phone: String,
  address: String,
  facebook: String,
  twitter: String,
  linkedin: String,
  instagram: String,
  youtube: String,
  footerText: String,
});

SettingSchema.add(BaseSchema);
export default mongoose.model("Setting", SettingSchema);
