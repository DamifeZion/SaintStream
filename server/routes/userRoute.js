const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  editUserLoggedIn,
  editUserForgotPassword,
  deleteUser,
} = require("../controllers/userCtrl");

//middlewares
const {
  multerUpload,
  multerErrHandler,
} = require("../middlewares/multerMiddleware");

router.post("/register", createUser);

router.post("/login", loginUser);

//edit user from dashboard
router.put("/:id", multerUpload.single("profileImage"), editUserLoggedIn);

//edit user if they forgot password
router.put("/", editUserForgotPassword);

//delete user
router.delete("/:id", deleteUser);

//Use multer error handler
router.use(multerErrHandler);

module.exports = router;
