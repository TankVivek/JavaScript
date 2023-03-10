const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/users/view", (req, resp) => {
  User.find()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.post("/users/add", (req, resp) => {
  const us = new User(req.body);
  us.save()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.put("/users/update/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.patch("/users/update/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.delete("/users/delete/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.post("/userlogin", async (req, resp) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;
    const userdata = await User.findOne({ email: email });
    const valid = await bcrypt.compare(pass, userdata.pass);
    if (valid) {
      const token = await jwt.sign(
        { _id: userdata._id },
        "thisismyloginwebtoken"
      );
      resp.send("Token  : " + token);
    } else {
      resp.send("Invalid credentials !!!!");
    }
  } catch (error) {
    resp.send("Invalid credentials !!!!");
  }
});

module.exports = router;
