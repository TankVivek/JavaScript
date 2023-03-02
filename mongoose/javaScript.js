


// const express = require("express")
// const app = require("express")
const mongoose = require("mongoose")
// port = 9213;


const durl= "mongodb://127.0.0.1:27017/shopping"

mongoose.connect(durl).then(()=>{
    console.log("db connected");
}).catch(err => {
    console.log(err);
})

 const userschema = new  mongoose.Schema 
 ({
    name:{type:String},
    email:{ type:String,
            unique:true,
            require:true
            },
    pass:{type:Number},
    age:{type:Number},

    created: {
        type:Date,
        default: new Date().now
    }
})

 const user = new mongoose.model("user", userschema)

 const adduser = () => 
 
 { 
    const customer = new user({name:"rutvik",email:"ruvik@gmail.com",pass:"rutvik12",age:25});
    user.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })

 }
  
 const addmanyUser = () => { 
    const customer1 = new user ({name:"rutvik",email:"ruvik@gmail.com",pass:123,age:25,num:12})
    const customer2 = new user ({name:"vivek",email:"vivek@gmail.com",pass:123,age:26})
    const customer3 = new user ({name:"jay",email:"jay@gmail.com",pass:123,age:27})
    user.insertMany([customer1,customer2,customer3]).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })


 }

 const viewuser = () => {

    user.find().then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
 }

 const upadatedata = () => {

    user.updateOne({name:"jay"},{pass:12345}).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
 } 

// upadatedata()
//  viewuser ();
//  addmanyUser ();
//  adduser()