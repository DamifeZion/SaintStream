//third party modules
const validator = require("validator");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

//local modules
const userModel = require("../models/userModel");
const createToken = require("../middlewares/createTokenMiddleware");

const createUser = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;

    if (!userName || !email || !password || !confirmPassword) {
      return res.status(200).json({
        success: false,
        message: "All fields must be field",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(404).json({
        success: false,
        message: "Email is invalid",
      });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(404).json({
        success: false,
        message: "Password not strong enough",
      });
    }

    if (confirmPassword !== password) {
      return res.status(404).json({
        success: false,
        message: "Passwords are not the same",
      });
    }

    const emailExists = await userModel.findOne({ email });
    const userNameExists = await userModel.findOne({ userName });

    if (emailExists) {
      return res.status(404).json({
        success: false,
        message: "Email already in use",
      });
    }

    if (userNameExists) {
      return res.status(404).json({
        message: "Username already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      image: "",
      userName,
      email,
      password: hash,
    });

    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      message: "Successfully registered",
      image: user.image,
      userName: user.userName,
      email: user.email,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//login users
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields must be field",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const verifyPasswords = await bcrypt.compare(password, user.password);

    if (!verifyPasswords) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      image: user.image,
      userName: user.userName,
      email: user.email,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//Edit user profile
const editUserLoggedIn = async (req, res) => {
  const { id } = req.params;
  const { userName, email, password } = req.body;
  let filename;

  if (req.file) {
    filename = req.file.filename;
  }
  // Validating user ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid user id",
    });
  }

  const user = await userModel.find({ id });

  let imageUpdate = filename || user.image;
  const usernameUpdate = userName || user.userName;
  const emailUpdate = email || user.email;
  const passwordUpdate = password || user.password;

  //Validate username & check if updated username exists

  if (usernameUpdate) {
    const updatedUsernameExists = await userModel.findOne({ userName });

    if (updatedUsernameExists && updatedUsernameExists._id.toString() !== id) {
      return res.status(404).json({
        success: false,
        message: "Username already in use",
      });
    }
  }

  //Validate email & check if updated email exist
  if (emailUpdate) {
    const updatedEmailExists = await userModel.findOne({ email });

    if (!validator.isEmail(emailUpdate)) {
      return res.status(404).json({
        success: false,
        message: "Email is invalid",
      });
    }

    if (updatedEmailExists && updatedEmailExists._id.toString() !== id) {
      return res.status(404).json({
        success: false,
        message: "Email already in use",
      });
    }
  }

  let hash;
  if (passwordUpdate) {
    if (!validator.isStrongPassword(passwordUpdate)) {
      return res.status(403).json({
        success: false,
        message: "Password not strong enough",
      });
    }

    const salt = await bcrypt.genSalt(10);
    hash = await bcrypt.hash(passwordUpdate, salt);
  }

  const userUpdate = await userModel.findByIdAndUpdate(id, {
    image: imageUpdate,
    userName: usernameUpdate,
    email: emailUpdate,
    password: hash,
  });

  const token = createToken(user._id);

  res.status(200).json({
    success: true,
    message: "Successfully updated details",
    image: userUpdate.image,
    userName: userUpdate.userName,
    email: userUpdate.email,
    token: token,
  });

  try {
  } catch (error) {
    console.log("Error:", error); // Debugging statement

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

const editUserForgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(404).json({
      success: false,
      message: "Please enter your account email address",
    });
  }

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Email does not exist",
    });
  }

  

  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//Delete user account
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid user id",
      });
    }

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    //Verify password to permit delete
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(404).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    const deletedUser = await userModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User Account Deleted",
      deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  editUserLoggedIn,
  editUserForgotPassword,
  deleteUser,
};
