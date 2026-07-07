import mongoose from "mongoose";
import { BaseSchema } from "./Base.js";

const StatisticSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: Number, required: true },
  icon: String,
  order: { type: Number, default: 0 },
});

StatisticSchema.add(BaseSchema);
export default mongoose.model("Statistic", StatisticSchema);
