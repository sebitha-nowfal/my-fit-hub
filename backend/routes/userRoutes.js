import express from "express";
import { signup, login, getAllUsers } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// GET all users
router.get("/", getAllUsers);

// NEW: User Profile Route
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
