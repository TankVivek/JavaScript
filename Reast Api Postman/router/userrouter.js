
const express = require("express")
const router = express.Router()
const User = require("../model/user")



router.get("/users",(req,resp) => {
    User.find().then(data => {
         resp.send(data)
        }).catch(err => { 
            resp.send(err)
        })
})

router.post("/users",(req,resp) => {
    const us = new  User(req.body)
         us.save().then(data => {
     resp.send(data)
        }).catch(err => { 
            resp.send(err)
        })
})

router.put("/users/:id",(req,resp) => {
    const _id = req.params.id
    User.findByIdAndUpdate(_id,req.body).then(data => {
        resp.send(data)
    }).catch(err => { 
        resp.send(err)
    })
})

router.patch("/users/:id", (req,resp) => {
    const _id = req.params.id
    User.findByIdAndUpdate(_id, req.body).then(data => {
        resp.send(data)
    }).catch(err => { 
        resp.send(err)
    })
})
router.delete("/users/:id", (req,resp) => {
    const _id = req.params.id
    User.findByIdAndDelete(_id, req.body).then(data => {
        resp.send(data)
    }).catch(err => { resp.send(err)})
})

module.exports = router