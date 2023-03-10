const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  pass: {
    type: String,
  },
  _id: Number,
});

newSchema.pre("save", async function () {
  try {
    if ((this.isModified = "pass")) {
      this.pass = await bcrypt.hash(this.pass, 10);
    }
  } catch (error) {}
});

const user = new mongoose.model("user", newSchema);

module.exports = user;
