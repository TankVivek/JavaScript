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
    
const em1 = { name : "vivek" , email : "vivektank@gmail.com" }
const em2 = { name : "rutvik" , email : "rutvik@gmail.com" }
const em3 = { name : "jay" , email : "jay@gmail.com" }

myDB.collection("emp").insertMany([em1,em2,em3]).then(result => {
    console.log(result);}).catch(err => {
    console.log(err);    

})}).catch(err => {console.log(err);})