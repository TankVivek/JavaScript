

// const mongo = require('mongodb').MongoClient
// const url = 'mongodb://127.0.0.1:27017/'

// mongo.connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
//   }, (err, client) => {
//   if (err) {
    // console.error(err)
    // return
//   }
  //...
// })
// const db = client.db('student')
// const collection = db.collection('Roll Number')
// collection.insertMany([{name: 'rutvik',email:'rutvik@gmail.com',age:25}, {name: 'sanket',email:'sanket@gmail.com',age:24},{name: 'jay',email:'jay@gmail.com',age:23}], (err, result) => {

// })



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});