var express = require("express")
var path = require("path")
const bodyParser = require("body-parser")
var app = express()
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));

let users = [
  {nick: "111", email: "111@w.pl"},
  {nick: "222", email: "222@w.pl"},
  {nick: "333", email: "333@w.pl"}
]

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/static/newsletter/addUser.html"))
})

app.get("/removeUserBySelect", function (req, res) {
  res.send(`
<body>
<form action="/removeUserBySelect" method="POST" id="delUser"><br>
<input type="submit" value="usun"><br>
</form>
<select name="email" form="delUser">
${
    Array.from(users, (user, _) => `<option value="${user.email}">${user.email}</option>`).join("")
  }
</select>
</body>`)
})

app.get("/removeUserByRadio", function (req, res) {
  res.send(`
    <body>
    <form action="/removeUserBySelect" method="POST" id="delUser"><br>
    ${
    Array.from(users, (user, _) => `<input type="radio" name="email" value="${user.email}"></input><label>${user.email}</label><br>`).join("")
  }

    <input type="submit" value="usun"><br>
    </form>
    </body>`)
})

app.get("/removeUserByCheckbox", function (req, res) {
  res.send(`
    <body>
    <form action="/removeUserByCheckbox" method="POST" id="delUser"><br>
    ${
    Array.from(users, (user, _) => `<input type="checkbox" name="email" value="${user.email}"></input><label>${user.email}</label><br>`).join("")
  }

    <input type="submit" value="usun"><br>
    </form>
    </body>`)
})

app.post("/add", function (req, res) {
  console.log(req.body)

  if (users.some(e => e.email === req.body.email)) {
    res.send(`<body>E-mail juz w bazie</body>`)
  } else {
    users.push(req.body)
    res.send(`<body>Dodano</body>`)
  }


})

app.post("/removeUserBySelect", function (req, res) {
  console.log(req.body)
  users.splice(users.findIndex(user => user.email === req.body.email), 1)
  res.send(`<body>Usunieto</body>`)
})

app.post("/removeUserByRadio", function (req, res) {
  console.log(req.body)
  users.splice(users.findIndex(user => user.email === req.body.email), 1)
  res.send(`<body>Usunieto</body>`)
})

app.post("/removeUserByCheckbox", function (req, res) {
  console.log(req.body)
  req.body.email.forEach(el => {
    users.splice(users.findIndex(user => user.email === el), 1)
  });
  res.send(`<body>Usunieto</body>`)
})

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
