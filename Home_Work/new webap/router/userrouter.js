const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const multer = require("multer");

///*******************************  *********************************///
