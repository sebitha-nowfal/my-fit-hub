import express from "express";
import {
  createWorkout,
  getMyWorkouts,
  updateWorkout,
  deleteWorkout
} from "../controllers/workoutController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User must be logged in
router.post("/", protect, createWorkout);
router.get("/", protect, getMyWorkouts);
router.put("/:id", protect, updateWorkout);
router.delete("/:id", protect, deleteWorkout);

export default router;
