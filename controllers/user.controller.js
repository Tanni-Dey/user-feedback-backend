const User = require("../models/user.model");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/customError");

//create single user
const createUser = asyncWrapper(async (req, res, next) => {
  const userData = {
    name: req.body.name,
    userEmail: req.body.email,
    password: req.body.password,
  };

  // user checking
  const checkUser = await User.findOne({ userEmail: userData.userEmail });
  if (checkUser) {
    return next(createCustomError("Already used this email", 404));
  }

  // user create
  const user = await User.create(userData);
  if (!user) {
    return next(createCustomError("User not created", 404));
  }
  res.status(200).json({ user });
});

module.exports = {
  createUser,
};
