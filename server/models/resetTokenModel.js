const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },

    validated: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const resetTokenModel = mongoose.model("ResetPasswordToken", tokenSchema);

module.exports = resetTokenModel;
