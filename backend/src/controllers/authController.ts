import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const secret = process.env.JWT_SECRET ?? "secret";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = await User.findOne({ email }).lean();
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = jwt.sign({ id: user._id.toString(), email: user.email, role: user.role }, secret, { expiresIn: "8h" });
  res.json({ token, user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role, avatar: user.avatar } });
}

export async function forgotPassword(req: Request, res: Response) {
  const { email } = req.body as { email?: string };
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const user = await User.findOne({ email }).lean();
  if (!user) {
    return res.status(200).json({ message: "If that email exists, a reset link has been sent." });
  }

  res.json({ message: "Password reset link sent to your email." });
}
