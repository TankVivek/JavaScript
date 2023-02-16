const express=require("express");
const app=express();7
const path=require("path");
   
const port=9500

app.get("/",(req,resp)=>{
    resp.send("Server runner..~~~");
})
app.get("/bbb",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"));
})
app.get("/aaa",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"aaa.html"));
})
app.listen(port,()=>{
    console.log("Port is running..!! :"+port);
})  


