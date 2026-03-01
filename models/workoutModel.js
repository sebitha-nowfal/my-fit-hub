import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // owner
  trainer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional trainer who created or assigned it
  title: { type: String, required: true },
  description: { type: String }, // short description
  instructions: { type: String }, // steps / how-to
  video_link: { type: String }, // optional video URL (YouTube / hosted)
  duration: { type: Number }, // minutes
  calories: { type: Number }, // estimated kcal burned
  date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Workout", workoutSchema);
