import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const OfficeSchema = new mongoose.Schema({
  country: String,
  city: String,
  address: String,
  phone: String,
  email: String,
  map: String,
});

OfficeSchema.add(BaseSchema);
export default mongoose.model("Office", OfficeSchema);
