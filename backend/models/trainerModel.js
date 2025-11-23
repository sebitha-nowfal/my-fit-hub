import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // link to User record (if trainer is also a user)
  name: { type: String, required: true },
  expertise: { type: String },   // e.g., "Yoga", "Strength", "Cardio"
  experience: { type: Number },  // years
  rating: { type: Number, default: 5 },
  available: { type: Boolean, default: true },
  phone: { type: String },
  email: { type: String }
}, { timestamps: true });

export default mongoose.model("Trainer", trainerSchema);
