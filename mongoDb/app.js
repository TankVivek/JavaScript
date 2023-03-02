


const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const dburl = "mongodb://127.0.0.1:27017/";
const database = "bank"

MongoClient.connect(dburl).then(result => { console.log("db connect");})

const mydb = result.db(database)


// mydb.createCollection("Account").then(result => { console.log(result);})


const em1 = { name : "vivek" , email : "vivektank@gmail.com" }
const em2 = { name : "rutvik" , email : "rutvik@gmail.com" }
const em3 = { name : "jay" , email : "jay@gmail.com" }

mydb.collection("emp").insertMany([em1,em2,em3]).then(result => { 
    console.log(result);}).catch(err => {console.log(err);})

