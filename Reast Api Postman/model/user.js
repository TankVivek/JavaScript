
const mongoose = require("mongoose")

const newSchema = new mongoose.Schema( {

    uname:{
        type:String
    },
    uemail:{
        type:String
    },
    _id:Number

})

const user = new mongoose.model("user",newSchema)

module.exports = user