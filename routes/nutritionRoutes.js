import express from "express";
import {
  addNutrition,
  getMyNutrition,
  updateNutrition,
  deleteNutrition
} from "../controllers/nutritionController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addNutrition);
router.get("/", protect, getMyNutrition);
router.put("/:id", protect, updateNutrition);
router.delete("/:id", protect, deleteNutrition);

export default router;
