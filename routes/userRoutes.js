import express from "express";
import {
  getAllUsers,
  getUserById,
  getProfile,
  checkAdmin
} from "../controllers/userController.js";

const router = express.Router();

// Routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/profile/me", getProfile);
router.get("/check/admin", checkAdmin);

export default router;
