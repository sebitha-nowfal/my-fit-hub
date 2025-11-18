import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  duration: Number,
  calories: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Workout", workoutSchema);
