import { type Request, type Response } from "express";

export function createResource(Model: any) {
  return async (req: Request, res: Response) => {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  };
}

export function getAllResource(Model: any) {
  return async (req: Request, res: Response) => {
    const items = await Model.find().sort({ createdAt: -1 }).lean();
    res.json(items);
  };
}

export function getResource(Model: any) {
  return async (req: Request, res: Response) => {
    const item = await Model.findById(req.params.id).lean();
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  };
}

export function updateResource(Model: any) {
  return async (req: Request, res: Response) => {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  };
}

export function deleteResource(Model: any) {
  return async (req: Request, res: Response) => {
    const item = await Model.findByIdAndDelete(req.params.id).lean();
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  };
}
