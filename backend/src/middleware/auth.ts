import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET must be defined in environment");
}

export interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string };
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, secret) as { id: string; email: string; role: string };
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
