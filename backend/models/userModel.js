import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "trainer", "admin", "seller"],
    default: "user"
  },
  height: { type: Number }, // in cm
  weight: { type: Number }, // in kg
  // optional profile fields
  bio: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Example virtual (optional): BMI
userSchema.virtual('bmi').get(function() {
  if (!this.height || !this.weight) return null;
  // height in meters
  const h = this.height / 100;
  return +(this.weight / (h * h)).toFixed(2);
});

export default mongoose.model("User", userSchema);
