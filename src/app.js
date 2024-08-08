const color = require("colors");
const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("../models/user");

const PORT = 5000;
const app = express();

// Some SetUp
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;

  const createdUser = await userModel.create({
    username,
    email,
    password,
    age,
  });

  res.send(createdUser);
});

app.get("/read", (req, res) => {
  res.send("<h1>Read Page</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Now, Your server has started on port ${PORT}`.yellow.underline.bold
  );
});
