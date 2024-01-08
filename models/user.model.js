const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide user name"],
    trim: true,
    maxLength: [20, "name can not be more than 20 characters"],
  },
  userEmail: {
    type: String,
    required: [true, "must provide user email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "must provide user password"],
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
