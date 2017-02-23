var express=require('express');
var path=require('path');
var app=express();
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var register=require('./Routes/register.js');

mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;
db.once('open', function callback () {
  console.log("Connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',express.static(path.join(__dirname,'../Client')));
app.use('/register',register);

app.listen(7070);
