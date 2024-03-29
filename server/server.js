require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//Initialize dependencies
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//Server state
app.get("/", (req, res) => {
  res.send("Api is running...");
});

//routes
const userRoute = require("./routes/userRoute");
app.use("/api/v1/user", userRoute);

const dbUrl = process.env.MONGO_DB_URL;
const port = process.env.PORT || 8080;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

//connect to DB and listen
mongoose
  .connect(dbUrl, options)
  .then(
    app.listen(port, () => {
      console.log(`Connected to MongoDb. Listening on Port: ${port}`);
    })
  )
  .catch((err) => console.error(err));
