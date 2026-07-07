import bcrypt from "bcryptjs";
import User from "../models/User.js";

export async function ensureAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@amgc.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "admin123";
  const existing = await User.findOne({ email: adminEmail });
  if (existing) return;
  const passwordHash = await bcrypt.hash(adminPassword, 10);
  await User.create({
    name: "AMGC Admin",
    email: adminEmail,
    passwordHash,
    role: "admin",
  });
  console.log(`Created default admin user: ${adminEmail}`);
}
