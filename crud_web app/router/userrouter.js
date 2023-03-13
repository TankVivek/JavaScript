const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const User = require("../model/user");

router.get("/", async (req, resp) => {
  try {
    const data = await User.find();

    resp.render("index", { udata: data });
  } catch (error) {}
});
router.post("/addUser", async (req, resp) => {
  try {
    var _id = req.body._id;

    if (_id == "") {
      console.log("test");
      const user = new User({
        uname: req.body.uname,
        email: req.body.email,
        pass: req.body.pass,
      });
      await user.save();
    } else {
      await User.findByIdAndUpdate(_id, req.body);
    }

    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete", async (req, resp) => {
  try {
    const _id = req.query.did;
    await User.findByIdAndDelete(_id);
    resp.redirect("/");
  } catch (error) {}
});

router.get("/edit", async (req, resp) => {
  try {
    const _id = req.query.eid;
    const data = await User.findOne({ _id: _id });
    const data1 = await User.find();
    resp.render("index", { edata: data, udata: data1 });
  } catch (error) {}
});

module.exports = router;
