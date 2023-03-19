// @desc Register New User
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "Register user" });
};

// @desc Authenicate a  User
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

// @desc Get User Date
// @route GET /api/users/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: "User Date" });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
