import express from "express";
import Plan from "../models/Plan.js";


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch plans" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, price, duration, benefits } = req.body;

    const plan = new Plan({
      name,
      price,
      duration,
      benefits,
    });

    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Failed to create plan" });
  }
});

export default router;
