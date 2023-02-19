
const express = require ("express")
const app = express();
// const weather = require("./util/weather")
// const geocode = require("./util/geocode")
const hbs = require ("hbs")
const path = require ("path")
const port = 9005;

app.get("/",(req,resp)=>{
    resp.render("index",{user:"vivek"})
})

app.listen(port,()=>{ console.log("server is runnign" +port);})