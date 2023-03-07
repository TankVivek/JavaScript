const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose");

app.use(express.json());
const url =
  "mongodb+srv://vivektank:vivektank@cluster0.pqvunzi.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then((result) => {
    console.log("db connect");
  })
  .catch((err) => {
    console.log(err);
  });

// const newSchema = new mongoose.Schema( {

// name:{
//     type:String
// },
// email:{
//     type:String
// },
// _id:Number

// })

// const User = new mongoose.model("data",newSchema)

// app.get("/users",(req,resp) => {
//     User.find().then(data => {
//          resp.send(data)
//         }).catch(err => {
//             resp.send(err)
//         })
// })

// app.post("/users",(req,resp) => {
//     const us = new  User(req.body)

//          us.save().then(data => {
//      resp.send(data)
//         }).catch(err => {
//             resp.send(err)
//         })
// })

// app.put("/users/:id",(req,resp) => {
//     const _id = req.params.id
//     User.findByIdAndUpdate(_id,req.body).then(data => {
//         resp.send(data)
//     }).catch(err => {
//         resp.send(err)
//     })
// })

// app.patch("/users/:id", (req,resp) => {
//     const _id = req.params.id
//     User.findByIdAndUpdate(_id, req.body).then(data => {
//         resp.send(data)
//     }).catch(err => {
//         resp.send(err)
//     })
// })
// app.delete("/users/:id", (req,resp) => {
//     const _id = req.params.id
//     User.findByIdAndDelete(_id, req.body).then(data => {
//         resp.send(data)
//     }).catch(err => { resp.send(err)})
// })

const userrouter = require("./router/userrouter");
const productroutr = require("./router/productrouter");
app.use("/", userrouter);
app.use("/", productroutr);

app.listen(port, () => {
  console.log("sever is runng");
});
