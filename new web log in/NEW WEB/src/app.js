const express = require("express");
const app = express();
// require("dotenv").config({ debug: true });
require("dotenv").config();
// require("./config/config.js");
// const port = 3200;
const mongoose = require("mongoose");
const Bodyparser = require("body-parser");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.port;

// const cookieParser = require("cookie-parser");
const hbs = require("hbs");

const bdurl =
  "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/newwebapp?retryWrites=true&w=majority";

mongoose.connect(bdurl).then((result) => {
  console.log("db connected");
});

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// set View Engine
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "../templetes/views"));
hbs.registerPartials(path.resolve(__dirname, "../tampletes/partials"));
app.use(express.static(path.resolve(__dirname, "../public")));

// use to require userrouter
app.use("/", require("../router/userrouter"));

app.listen(() => {
  console.log(`server is running ${process.env.port}`);
});
