const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const DBurl = "mongodb://127.0.0.1:27017/"
const databse = "new_bank"
MongoClient.connect(DBurl).then(result=> 
{
    
    console.log("db connect");

    const myDB = result.db(databse)


    // myDB.createCollection("new account").then(data => {

    //     console.log("data Created");
    // })
    
const em1 = {_id:1, name : "jaydeep" , email : "jaydeep@gmail.com" }
const em2 = {_id:2, name : "chintan" , email : "chinatn@gmail.com" }
const em3 = {_id:3, name : "sanket" , email : "sanket@gmail.com" }

myDB.collection("emp").insertMany([em1,em2,em3]).then(result => {
    console.log(result);}).catch(err => {
    console.log(err);    

})}).catch(err => {console.log(err);})