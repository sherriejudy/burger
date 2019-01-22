
// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));

// app.get('/', function (req, res) {
//     res.render('index');
// });

var routes = require("./controllers/burgers_controller.js")

app.use(routes);

// Start listening on PORT
app.listen(PORT, function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Burgers app is listening on PORT: " + PORT);
    }


});


