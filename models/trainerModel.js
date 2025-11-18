import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },  // ex: Yoga, Strength, Cardio
  experience: Number,  // years
  available: { type: Boolean, default: true },
  phone: String,
  email: String
});

export default mongoose.model("Trainer", trainerSchema);
