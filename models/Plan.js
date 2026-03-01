import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  benefits: { type: [String], default: [] },
});

const Plan = mongoose.model("Plan", planSchema);

export default Plan;   
