const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");

router.get("/", (req, resp) => {
  resp.render("registration");
});

router.get("/login", (req, resp) => {
  resp.render("login");
});

router.post("/AddUser", async (req, resp) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    resp.render("registration", { msg: "registration successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
