const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  img: {
    type: String,
  },
  Tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("pass")) {
      this.pass = await bcrypt.hash(this.pass, 10);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = new mongoose.model("User", UserSchema);
