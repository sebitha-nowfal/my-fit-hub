import Workout from "../models/workoutModel.js";

// Create Workout
export const createWorkout = async (req, res) => {
  try {
    const { title, duration, calories } = req.body;

    const workout = await Workout.create({
      user: req.user.id,
      title,
      duration,
      calories,
    });

    res.status(201).json({
      message: "Workout added successfully",
      workout,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all workouts for logged-in user
export const getMyWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update workout
export const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!workout) return res.status(404).json({ message: "Workout not found" });

    res.json({ message: "Workout updated", workout });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete workout
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!workout) return res.status(404).json({ message: "Workout not found" });

    res.json({ message: "Workout deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
