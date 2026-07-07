import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:8080"] }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI must be defined in environment");
}

import { ensureAdminUser } from "./utils/seedAdmin.js";

mongoose
  .connect(uri)
  .then(async () => {
    console.log("Connected to MongoDB");
    await ensureAdminUser();
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });

export default app;
