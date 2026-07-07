import { type Request, type Response, type NextFunction } from "express";

export function errorHandler(err: Error & { status?: number }, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  res.status(err.status ?? 500).json({ message: err.message ?? "Internal server error" });
}
