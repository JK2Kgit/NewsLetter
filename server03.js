var express = require("express")
var path = require("path")
const bodyParser = require("body-parser")
var app = express()
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index2.html"))
})

app.post("/handleForm", function(req, res){
    console.log(req.body)    
    res.send(`<body style="background-color: ${req.body.color}"><h1>${req.body.color}</h1></body>`)
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})