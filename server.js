var express = require("express");
var session = require('express-session');
var app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.send("<h1>Hello Express</h1>");
})
app.get("/cats", function (request, response) {
    response.render('cats');
})
app.get("/kitty", function (request, response) {
    var kitty = {
        Name: "Kitty",
        Favorite_Food: "Mac & cheese",
        Age: "8",
        Sleeping_Spots: ["under the bed", "closet"]
    }
    response.render('details.ejs', { kitty: kitty });
})
app.get("/miracle", function (request, response) {
    var miracle = {
        Name: "Miracle",
        Favorite_Food: "Spaghetti",
        Age: "3",
        Sleeping_Spots: ["Under the Grill", "On top of fridge"]
    }
    response.render('details.ejs', { kitty: miracle });
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})