import Trainer from "../models/trainerModel.js";

// Add Trainer (only admin)
export const addTrainer = async (req, res) => {
  try {
    const { name, experience, specialization } = req.body;

    const trainer = await Trainer.create({
      name,
      experience,
      specialization,
    });

    res.status(201).json({ message: "Trainer added", trainer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all trainers
export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Trainer
export const updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!trainer) return res.status(404).json({ message: "Trainer not found" });

    res.json({ message: "Trainer updated", trainer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Trainer
export const deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);

    if (!trainer) return res.status(404).json({ message: "Trainer not found" });

    res.json({ message: "Trainer deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
