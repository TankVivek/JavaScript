
const express = require ("express")
const app = express();
// const weather = require("./util/weather")
// const geocode = require("./util/geocode")
const hbs = require ("hbs")
const path = require ("path")
const port = 9005;

const viewpath = path.join (__dirname,"./tamplate/view")
const partialpath = path.join(__dirname,"./tamplate/partials")
const puclicpath = path.join(__dirname,"./public")

app.set("view engine", "hbs")
app.set("view", viewpath)
hbs.registerPartial(partialpath)
app.use(express.static(puclicpath))

app.get("/",(req,resp)=>{
    resp.render("index",{user:"vivek"})
})

app.get("/myweather",(req,resp)=>{
    resp.render("weather")
})
app.get("/about",(req,resp)=>{
    resp.render("about")
})

app.get("/weather",(req,resp)=>
{
    const localtion = req.query.localtion

    geocode.getgeocode(localtion).then
    (result => {
        return weather.getweather
        (result.lat,result.lng)
    }).then(DATA => {
        D
    })
})


app.listen(port,()=>{ console.log("server is runnign" +port);})