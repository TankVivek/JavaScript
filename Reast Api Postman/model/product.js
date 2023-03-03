

const mongoose = require("mongoose")

const newSchema = new mongoose.Schema( {

    name:{
        type:String
    },
    email:{
        type:String
    },
    _id:Number

})

module.exports = new mongoose.model("Product", newSchema)
