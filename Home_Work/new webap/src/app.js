const express = require("express");
const app = express();
const port = 3100;
mongoose = require("mongoose");
const path = require("path");
const hbs = require("hbs");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const dbural =
  "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/new_database?retryWrites=true&w=majority";

mongoose.connect(dbural).then((result) => {
  console.log("db connected");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const publicpath = path.join(__dirname, "../public");
const viewpath = path.join(__dirname, "../templetes/views");
const partialpath = path.join(__dirname, "../templetes/partials");

app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));

app.use("/", require("../router/userrouter"));

app.listen(port, (req, resp) => {
  console.log("port is running :" + port);
});
