import mongoose from "mongoose";

export const BaseSchema = new mongoose.Schema({
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});

BaseSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});
