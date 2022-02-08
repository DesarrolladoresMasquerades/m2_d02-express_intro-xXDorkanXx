const express = require("express");

require("dotenv/config") //.config();

const app = express();

app.use(express.static("public"))

// This responds to all HTTP verbs
app.all("/home", (request, response)=>{
    response.sendFile(__dirname + "/views/home.html")
})

app.listen(3000, ()=>{console.log("App listening on port 3000")})


