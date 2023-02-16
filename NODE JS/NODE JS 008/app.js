const express = require("express")
const app = express();
const port = 8000;
const path = require("path")



app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "home.html"))
})

app.get("/about", (req, resp) => {
    resp.sendFile(path.join(__dirname, "about.html"))

})
app.get("/contact", (req, resp) => {
    resp.sendFile(path.join(__dirname, "contact.html"))

})
app.get("/log", (req, resp) => {
    resp.sendFile(path.join(__dirname, "log_in.html"))

})


app.get("*", (req, resp) => {
    resp.send("404 : Page not found")
})


app.listen(port, () => {
    console.log("Server running on port : " + port);
})