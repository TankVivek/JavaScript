const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const multer = require("multer");

///*******************************  *********************************///

router.get("/", (req, resp) => {
  resp.render("registraion");
});

router.get("/login", (req, resp) => {
  resp.render("login");
});

module.exports = router;
