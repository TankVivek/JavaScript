const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/view", (req, resp) => {
  User.find()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.post("/add", (req, resp) => {
  const us = new User(req.body);
  us.save()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.put("/update/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.patch("/update/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.delete("/delete/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

module.exports = router;
