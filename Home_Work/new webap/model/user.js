const mongoose = require("mongoose");
const bcyrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  pass: {
    type: String,
  },
  Created: {
    type: Date,
    default: Date.now(),
  },
  Tokens: [
    {
      token: String,
    },
  ],
});

UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("pass")) {
      this.pass = await bcyrypt.hash(this.pass, 10);
    }
  } catch (error) {
    console.log(error);
  }
});

UserSchema.method.generateToken = async function (next) {
  try {
    const Skey = "thisismysecretkeyforlogin";
    const token = await jwt.sign({ _id: this._id }, Skey);

    this.Token = await this.Token.concat({ token: token });
    await this.save();
    return token;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = new mongoose.model("User", UserSchema);
