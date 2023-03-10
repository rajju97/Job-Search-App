import User from "../model/User.js";

const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({user})
  } catch (error) {
    next(error)
  }
};

const login = (req, res) => {
  res.send("login user");
};

const updateUser = (req, res) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
