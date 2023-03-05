const express = require("express");
const app = express();
const port = 9006;
const mongoose = require("mongoose");
const user = require("../Reast Api Postman/model/user");
mongoose.set("strictQuery", true);

const Aurl =
  "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/new_File?retryWrites=true&w=majority";

mongoose
  .connect(Aurl)
  .then((data) => {
    console.log("db connect");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/users", (req, resp) => {
  user
    .save(req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

app.listen(port, () => {
  console.log("port running " + port);
});
