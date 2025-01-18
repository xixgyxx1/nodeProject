const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("about");
});

const checkAuth = (req, res, next) => {
  console.log("admin permission");
  next();
};

const token = "token";
const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    res.send("you don have token");
  }
};

const getUser = (req, res) => {
  console.log("user info");
  res.send("user info");
};

app.get("/users", checkAuth, checkToken, getUser);

app.listen(3004, () => {
  console.log("server is on 3004");
});
