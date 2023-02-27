
const express = require ("express")
const app = express();
const port = 9100;
const mongoose = require("mongoose")




app.listen(port, ()=> {
    console.log("sever is runnig  :" +port);
})