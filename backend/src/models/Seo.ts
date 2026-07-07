import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const SeoSchema = new mongoose.Schema({
  metaTitle: String,
  metaDescription: String,
  keywords: String,
  ogImage: String,
  favicon: String,
  canonical: String,
  robots: String,
});

SeoSchema.add(BaseSchema);
export default mongoose.model("Seo", SeoSchema);
