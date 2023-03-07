const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/view", (req, resp) => {
  Product.find()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.post("/add", (req, resp) => {
  const us = new Product(req.body);
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
  Product.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

router.patch("/update/:id", (req, resp) => {
  const _id = req.params.id;
  Product.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});
router.delete("/delete/:id", (req, resp) => {
  const _id = req.params.id;
  Product.findByIdAndDelete(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

module.exports = router;
