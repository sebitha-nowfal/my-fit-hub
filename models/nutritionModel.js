import mongoose from "mongoose";

const nutritionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  meal: { type: String, required: true },     // e.g., "Breakfast", "Lunch", or food name
  foodName: { type: String },                  // e.g., "Oatmeal with banana"
  calories: { type: Number },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number },
  notes: { type: String },                     // optional notes/instructions
  date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Nutrition", nutritionSchema);
