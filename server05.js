var express = require("express")
var path = require("path")
const bodyParser = require("body-parser")
var app = express()
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index3.html"))
})

app.post("/validate", function(req, res){
    console.log(req.body)
    let pesel = req.body.pesel
    if(pesel.length != 11){
        res.send(`<body>Zla dlugosc (prawdilowa 11)</body>`)
        return
    }    
    if(pesel.match(/^[0-9]+$/) == null){
        res.send(`<body>Zly format litery w numerze</body>`)
        return
    }
    let numbrs = [];
    for (var i = 0; i < s.length; i++) {
        numbrs.push
(s.charAt(i);
    } 
})


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})