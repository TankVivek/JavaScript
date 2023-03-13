const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const hbs = require("hbs");
const port = 3100;

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
const url =
  "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/crudretryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("db connect");
});

const static_path = path.join(__dirname, "../public");
const viewpath = path.join(__dirname, "../tamplates/views");
const partialpath = path.join(__dirname, "../tamplates/partials");

app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(static_path));

app.use("/", require("../router/userrouter"));

app.listen(port, (req, resp) => {
  console.log("sever is connect" + port);
});
