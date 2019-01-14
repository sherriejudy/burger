
// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

// Start listening on PORT
app.listen(PORT, function () {
    console.log("Burgers app is listening on PORT: " + PORT);
});
