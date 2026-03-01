import Nutrition from "../models/nutritionModel.js";

// Add Nutrition Data
export const addNutrition = async (req, res) => {
  try {
    const { meal, foodName, calories, protein, carbs, fat, notes } = req.body;

    const nutrition = await Nutrition.create({
      user: req.user.id,
      meal,
      foodName,
      calories,
      protein,
      carbs,
      fat,
      notes,
    });

    res.status(201).json({ message: "Nutrition added", nutrition });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get logged-in user's Nutrition
export const getMyNutrition = async (req, res) => {
  try {
    const data = await Nutrition.find({ user: req.user.id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update nutrition
export const updateNutrition = async (req, res) => {
  try {
    const data = await Nutrition.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!data) return res.status(404).json({ message: "Nutrition data not found" });

    res.json({ message: "Nutrition updated", data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete nutrition
export const deleteNutrition = async (req, res) => {
  try {
    const data = await Nutrition.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!data) return res.status(404).json({ message: "Data not found" });

    res.json({ message: "Nutrition deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
