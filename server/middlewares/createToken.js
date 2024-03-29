const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

const createToken = (_id, expiresIn) => {
  return jwt.sign({ _id }, secret, {
    expiresIn: expiresIn || process.env.EXPIRES_IN,
  });
};

module.exports = createToken;
