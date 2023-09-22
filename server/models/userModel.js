const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  image: {
    type: String,
  },

  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  role: {
    type: String,
    required: true,
    default: "visitor",
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
