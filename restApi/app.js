const express = require("express");
const app = express();
const port = 9123;
const mongoose = require("mongoose");
const dburl = "mongodb://127.0.0.1:27017/Company";

mongoose.set("strictQuery", true);
app.use(express.json());
mongoose
  .connect(dburl)
  .then((result) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  pass: {
    type: String,
  },
});

const User = new mongoose.model("User", userSchema);

app.get("/users", (req, resp) => {
  User.find()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      console.log(err);
      resp.send(err);
    });
});

app.post("/users", (req, resp) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});
app.put("/users/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

app.patch("/users/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

app.delete("/users/:id", (req, resp) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id, req.body)
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      resp.send(err);
    });
});

app.listen(port, () => {
  console.log("sevser running" + port);
});
