//third party modules
const validator = require("validator");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//local modules
const userModel = require("../models/userModel");
const resetTokenModel = require("../models/resetTokenModel");
const createToken = require("../middlewares/createToken");
const sendMail = require("../middlewares/sendResetEmail");
const {
  hashPassword,
  comparePassword,
} = require("../middlewares/hashPassword");

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

    //hash password
    const hash = await hashPassword(password);

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

    const matchPasswords = await comparePassword(password, user.password);

    if (!matchPasswords) {
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
  const { userName, email } = req.body;
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

  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not exist",
    });
  }

  let imageUpdate = filename || user.image;
  const usernameUpdate = userName || user.userName;
  const emailUpdate = email || user.email;

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

  const userUpdate = await userModel.findByIdAndUpdate(id, {
    image: imageUpdate,
    userName: usernameUpdate,
    email: emailUpdate,
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

//Post request to edit password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(404).json({
        success: false,
        message: "Please enter account email address",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email does not exist",
      });
    }

    const resetToken = createToken(user._id, "30m");

    //create token for user validation
    await resetTokenModel.create({
      token: resetToken,
    });

    await sendMail(
      process.env.EMAIL_ANONYMOUS_USER, //email username
      process.env.EMAIL_ANONYMOUS_PASS, //email password
      user, //document
      "Reset Password", //subject
      "reset-password", //html folder name
      "reset-password.html", //html file name
      {
        username: user.userName,
        resetLink: `${process.env.BASE_URL}/reset-password/${resetToken}`, //dynamic data
      }
    );

    console.log(`Email sent successfully - from userCtrl line: 275`);

    res.status(200).json({
      success: true,
      message: "An email has been sent to reset password",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//Update user password here
const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { password, confirmPassword } = req.body;

  try {
    const decodedToken = jwt.verify(resetToken, process.env.SECRET);

    //getting user._id from decoded token
    const { _id } = decodedToken;

    //check if the user._id from the decoded token matches a user in our database
    const user = await userModel.findOne({ _id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message:
          "We couldn't find a valid token for your password reset request. Please ensure you have the correct reset link or initiate the password reset process again.",
      });
    }

    const tokenDocument = await resetTokenModel.findOne({
      token: resetToken,
    });

    if (!tokenDocument) {
      return res.status(404).json({
        success: false,
        message: "Token not found",
      });
    }

    //update validation state
    await resetTokenModel.findOneAndUpdate({ validated: true });

    //then handle password update form
    if (!password || !confirmPassword) {
      return res.status(404).json({
        success: false,
        message: "All fields must be filled",
      });
    }

    if (confirmPassword !== password) {
      return res.status(404).json({
        success: false,
        message: "Passwords are not the same",
      });
    }

    //hash the password
    const hash = await hashPassword(password);

    //update password
    const newPassword = await user.findByIdAndUpdate(_id, {
      password: hash,
    });

    //delete token model upon successful update
    await resetTokenModel.findOneAndDelete({ token: resetToken });

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      newPassword,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Your password reset link has expired. Please initiate the password reset process again.",
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
  forgotPassword,
  resetPassword,
  deleteUser,
};
