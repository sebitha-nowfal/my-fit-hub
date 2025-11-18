export const getProfile = (req, res) => {
  res.json(req.user);
};

export const checkAdmin = (req, res) => {
  res.json({ isAdmin: req.user.role === "admin" });
};

export const getAllUsers = async (req, res) => {
  res.json({ message: "All users list" });
};

// ⭐ ADD THIS FUNCTION ⭐
export const getUserById = async (req, res) => {
  try {
    // Ennulla real database illenkil demo response return cheyyam
    const dummyUser = {
      id: req.params.id,
      name: "Sample User",
      email: "sample@example.com",
    };

    res.json({
      message: "User details fetched successfully",
      user: dummyUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
