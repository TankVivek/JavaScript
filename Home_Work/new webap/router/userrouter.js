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

router.post("/addUser", async (req, resp) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      pass: req.body.pass,
    });
    console.log("user", user);
    const data = await user.save();
    console.log("data", data);
    resp.render("registraion", { msg: "registration successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/userLogin", async (req, resp) => {
  try {
    const useremail = req.body.eamil;
    const userpass = req.body.pass;

    const userdata = await User.findOne({ email: useremail });
    const isValid = await bcrypt.compare(userpass, userdata.pass);
    if (isValid) {
      const userdata1 = await User.find();

      const token = await userdata.generateToken();

      resp.cookie("jwt", token);
      resp.render("home", { user: userdata.uname, udata: userdata1 });
    } else {
      resp.render("login", { err: "Invalid credentials !!!" });
    }
  } catch (error) {
    resp.render("login", { err: "Invalid credentials !!!" });
  }
});

router.get("/home", async (req, resp) => {
  try {
    const userdata = await User.find();
    resp.render("home", { udata: userdata });
  } catch (error) {}
});

module.exports = router;
