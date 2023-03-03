
const express = require("express")
const router = express.Router()
const Product = require("../model/product")


router.get("/product",(req,resp) => {
    Product.find().then(data => {
         resp.send(data)
        }).catch(err => { 
            resp.send(err)
        })
})

router.post("/product",(req,resp) => {
    const us = new  Product(req.body)
         us.save().then(data => {
     resp.send(data)
        }).catch(err => { 
            resp.send(err)
        })
})

router.put("/product/:id",(req,resp) => {
    const _id = req.params.id
    Product.findByIdAndUpdate(_id,req.body).then(data => {
        resp.send(data)
    }).catch(err => { 
        resp.send(err)
    })
})

router.patch("/product/:id", (req,resp) => {
    const _id = req.params.id
    Product.findByIdAndUpdate(_id, req.body).then(data => {
        resp.send(data)
    }).catch(err => { 
        resp.send(err)
    })
})
router.delete("/product/:id", (req,resp) => {
    const _id = req.params.id
    Product.findByIdAndDelete(_id, req.body).then(data => {
        resp.send(data)
    }).catch(err => { resp.send(err)})
})

module.exports = router