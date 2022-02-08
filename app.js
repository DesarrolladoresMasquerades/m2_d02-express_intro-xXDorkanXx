const express = require("express");

require("dotenv/config") //.config();

const app = express();

app.use(express.static("public"))

app.all("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

// This responds to all HTTP verbs
app.all("/home", (request, response)=>{
    response.sendFile(__dirname + "/views/home.html")
})

// Exercise
app.all("/hobbies", (request, response)=>{
    response.sendFile(__dirname + "/views/hobbies.html")
})

app.all("/hobbies/crochet", (request, response)=>{
    response.sendFile(__dirname + "/views/crochet.html")
})

app.listen(3000, ()=>{console.log("App listening on port 3000")})


