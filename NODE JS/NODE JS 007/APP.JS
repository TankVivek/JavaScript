

const express = require("express")
const app = express();
const port = 9002;
const path = require("path")

app.get("/", (req, resp) => {
    resp.send("main req. calling....")
})

app.get("/home", (req, resp) => {
    resp.sendFile(path.join(__dirname, "main.html"))
})

app.get("/home2", (req, resp) => {
    resp.sendFile(path.join(__dirname, "home.html"))

})

app.get("*", (req, resp) => {
    resp.send("404 : Page not found")
})


app.listen(port, () => {
    console.log("Server running on port : " + port);
})
