const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    token: {
      type: String,
      required: true,
    },

    validated: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    expires: "30m",
  }
);

const resetTokenModel = mongoose.model("resettokens", tokenSchema);

module.exports = resetTokenModel;
