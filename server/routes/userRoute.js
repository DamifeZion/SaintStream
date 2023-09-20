const express = require("express");
const router = express.Router();
const { createUser, loginUser, editUser, deleteUser } = require("../controllers/userCtrl");

//middlewares
const {
  multerUpload,
  multerErrHandler,
} = require("../middlewares/multerMiddleware");

router.post("/register", createUser);

router.post("/login", loginUser);

router.put("/:id", multerUpload.single("profileImage"), editUser);

router.delete("/:id", deleteUser);

//Use multer error handler
router.use(multerErrHandler);

module.exports = router;
