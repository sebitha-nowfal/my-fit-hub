export const getProfile = (req, res) => {
  res.json(req.user);
};

export const checkAdmin = (req, res) => {
  res.json({ isAdmin: req.user.role === "admin" });
};
