import express from "express";
import { getProfile, checkAdmin, signup } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", signup);       // <<< ADD THIS

router.get("/profile", protect, getProfile);
router.get("/check-admin", protect, checkAdmin);

export default router;