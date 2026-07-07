import { Router } from "express";
import { login, forgotPassword } from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.post("/forgot-password", forgotPassword);

export default router;
