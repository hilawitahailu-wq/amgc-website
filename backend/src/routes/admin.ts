import { Router } from "express";
import multer from "multer";
import { requireAuth } from "../middleware/auth.js";
import User from "../models/User.js";
import News from "../models/News.js";
import Project from "../models/Project.js";
import Leadership from "../models/Leadership.js";
import Division from "../models/Division.js";
import Office from "../models/Office.js";
import Statistic from "../models/Statistic.js";
import Partner from "../models/Partner.js";
import Download from "../models/Download.js";
import Career from "../models/Career.js";
import Language from "../models/Language.js";
import Setting from "../models/Setting.js";
import Seo from "../models/Seo.js";
import {
  createResource,
  getAllResource,
  getResource,
  updateResource,
  deleteResource,
} from "../controllers/resourceController.js";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.use(requireAuth);

router.get("/me", async (req, res) => {
  const user = await User.findById(req.user?.id).lean();
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar });
});

router.get("/users", getAllResource(User));
router.post("/users", createResource(User));
router.get("/users/:id", getResource(User));
router.put("/users/:id", updateResource(User));
router.delete("/users/:id", deleteResource(User));

router.get("/news", getAllResource(News));
router.post("/news", createResource(News));
router.get("/news/:id", getResource(News));
router.put("/news/:id", updateResource(News));
router.delete("/news/:id", deleteResource(News));

router.get("/projects", getAllResource(Project));
router.post("/projects", createResource(Project));
router.get("/projects/:id", getResource(Project));
router.put("/projects/:id", updateResource(Project));
router.delete("/projects/:id", deleteResource(Project));

router.get("/leadership", getAllResource(Leadership));
router.post("/leadership", createResource(Leadership));
router.get("/leadership/:id", getResource(Leadership));
router.put("/leadership/:id", updateResource(Leadership));
router.delete("/leadership/:id", deleteResource(Leadership));

router.get("/divisions", getAllResource(Division));
router.post("/divisions", createResource(Division));
router.get("/divisions/:id", getResource(Division));
router.put("/divisions/:id", updateResource(Division));
router.delete("/divisions/:id", deleteResource(Division));

router.get("/offices", getAllResource(Office));
router.post("/offices", createResource(Office));
router.get("/offices/:id", getResource(Office));
router.put("/offices/:id", updateResource(Office));
router.delete("/offices/:id", deleteResource(Office));

router.get("/statistics", getAllResource(Statistic));
router.post("/statistics", createResource(Statistic));
router.get("/statistics/:id", getResource(Statistic));
router.put("/statistics/:id", updateResource(Statistic));
router.delete("/statistics/:id", deleteResource(Statistic));

router.get("/partners", getAllResource(Partner));
router.post("/partners", createResource(Partner));
router.get("/partners/:id", getResource(Partner));
router.put("/partners/:id", updateResource(Partner));
router.delete("/partners/:id", deleteResource(Partner));

router.get("/downloads", getAllResource(Download));
router.post("/downloads", createResource(Download));
router.get("/downloads/:id", getResource(Download));
router.put("/downloads/:id", updateResource(Download));
router.delete("/downloads/:id", deleteResource(Download));

router.get("/careers", getAllResource(Career));
router.post("/careers", createResource(Career));
router.get("/careers/:id", getResource(Career));
router.put("/careers/:id", updateResource(Career));
router.delete("/careers/:id", deleteResource(Career));

router.get("/languages", getAllResource(Language));
router.post("/languages", createResource(Language));
router.get("/languages/:id", getResource(Language));
router.put("/languages/:id", updateResource(Language));
router.delete("/languages/:id", deleteResource(Language));

router.get("/settings", getAllResource(Setting));
router.post("/settings", createResource(Setting));
router.get("/settings/:id", getResource(Setting));
router.put("/settings/:id", updateResource(Setting));
router.delete("/settings/:id", deleteResource(Setting));

router.get("/seo", getAllResource(Seo));
router.post("/seo", createResource(Seo));
router.get("/seo/:id", getResource(Seo));
router.put("/seo/:id", updateResource(Seo));
router.delete("/seo/:id", deleteResource(Seo));

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  res.json({ url: `/uploads/${req.file.filename}`, originalName: req.file.originalname });
});

export default router;
