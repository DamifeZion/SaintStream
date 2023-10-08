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
  {
    timestamps: true,
    expires: "30m",
  }
);

const resetTokenModel = mongoose.model("ResetPasswordToken", tokenSchema);

module.exports = resetTokenModel;
