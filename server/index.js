//Declare Express in variable 
var express = require('express');
var bodyParser = require('body-parser');
var port = process.ENV || 3005;
var app = express();

//middleware
app.use(bodyParser);

//hello world example
app.get('/', function(req, res){
  res.send('<h1>Welcome to Nest</h1>');
});
console.log("Listening on port:", port);
app.listen(port);