const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const createToken = (_id) => {
  return jwt.sign({ _id }, secret, { expiresIn: "30d" });
};

module.exports = createToken;
