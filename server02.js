var express = require("express")
var path = require("path")
var app = express()
const PORT = 3000;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})

app.get("/handleForm", function(req, res){
    console.log(req.query)    
    res.send(`<body style="background-color: ${req.query.color}"><h1>${req.query.color}</h1></body>`)
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})