import express from "express";
import {
  addTrainer,
  getAllTrainers,
  updateTrainer,
  deleteTrainer
} from "../controllers/trainerController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Public (or protected) — choose
router.get("/", getAllTrainers);

// Admin access
router.post("/", protect, authorize("admin"), addTrainer);
router.put("/:id", protect, authorize("admin"), updateTrainer);
router.delete("/:id", protect, authorize("admin"), deleteTrainer);

export default router;
