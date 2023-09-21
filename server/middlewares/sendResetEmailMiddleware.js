const nodemailer = require("nodemailer");
const path = require("path");
const ejs = require("ejs");

const sendMail = async (
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
  Model,
  Email_Subject,
  HTML_FOLDER_NAME,
  Html_File_Name,
  Dynamic_Html_Data
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const pathToFile = path.join(
    path.dirname(__dirname),
    "views",
    HTML_FOLDER_NAME,
    Html_File_Name
  );

  await transporter.sendMail({
    from: EMAIL_USERNAME,
    to: Model.email,
    subject: Email_Subject,
    html: await ejs.renderFile(pathToFile, Dynamic_Html_Data),
  });
};

module.exports = sendMail;
