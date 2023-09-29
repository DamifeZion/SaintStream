const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return (hash = await bcrypt.hash(password, salt));
};

const comparePassword = async (password, DBpassword) => {
  return await bcrypt.compare(password, DBpassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
