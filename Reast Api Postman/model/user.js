
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

const user = new mongoose.model("user",newSchema)

module.exports = user