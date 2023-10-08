const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  loginUser,
  editUserLoggedIn,
  forgotPassword,
  resetPassword,
  deleteUser,
} = require("../controllers/userCtrl");

//middlewares
const { multerUpload, multerErrHandler } = require("../middlewares/multer");
const requireAuth = require("../middlewares/requireAuth");

//get one user from token Id in requireAuth
router.get("/:token", getUser);

router.post("/register", createUser);

router.post("/login", loginUser);

//edit user from dashboard
router.put(
  "/:id",
  multerUpload.single("profileImage"),
  requireAuth,
  editUserLoggedIn
);

//collect email for password reset
router.post("/forgot-password", forgotPassword);

//collect and update password
router.put("/reset-password/:resetToken", resetPassword);

//delete user
router.delete("/:id", deleteUser);

//Use multer error handler
router.use(multerErrHandler);

module.exports = router;
