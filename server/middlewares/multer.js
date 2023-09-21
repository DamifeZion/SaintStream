const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(path.dirname(__dirname), "public", "uploads", "images"),

  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const multerUpload = multer({
  storage: storage,
  limits: {fileSize: 4 * 1024 * 1024}, //4mb
});

//Multer Error Handler
function multerErrHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }

  next();
}

module.exports = {multerUpload, multerErrHandler};
