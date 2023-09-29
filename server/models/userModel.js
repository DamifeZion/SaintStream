const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  image: {
    type: String,
  },

  userName: {
    type: String,
    required: true,
    upperCase: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowerCase: true,
  },

  password: {
    type: String,
    required: true,
  },

  policy: {
    type: Boolean,
    required: true,
    default: false,
  },

  role: {
    type: String,
    required: true,
    lowerCase: true,
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
