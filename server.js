//Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Initialize the express app
var app = express();
var PORT = process.env.PORT || 8080;

//Allows express to parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./app/public'));
//Routes

require('./app/routing/html-routes.js')(app);
// require('./app/routing/api-routes.js')(app);

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
})