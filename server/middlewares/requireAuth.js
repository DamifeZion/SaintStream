const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Authorization token required",
      });
    }

    const token = authorization.split(" ")[1];

    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await userModel.findOne({ _id });

    next();
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Request is not authorized",
    });
  }
};

module.exports = requireAuth;
