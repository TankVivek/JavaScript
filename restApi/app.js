
   
   const express = require ("express")
    const app = express();
    const port = 9100;
    const mongoose = require("mongoose")
    
    
    const durl = " mongodb://127.0.0.1:27017/student"
    mongoose.connect(durl).then(()=>{
        console.log("db connect");
    }).catch(err => {
        console.log(err);
    })

    const userSchema = new mongoose.Schema
    
    ({
       
    })

    
    
    app.listen(port, ()=> {
        console.log("sever is runnig  :" +port);  })