const color = require("colors");
const express = require("express");
const bcrypt = require("bcrypt");

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome" });
});

app.get("/read", (req, res) => {
  bcrypt.compare("aloklogin", "$2b$10$vGrutDA0cOUQqElmgzYgBOl0rXa5Lt9xxkb.KDoBDjR5mtPpTI8ue", function(err, result) {
    console.log("result", result);
  })
  res.send("<h1>Read Page</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Now, Your server has started on port ${PORT}`.yellow.underline.bold
  );
});
