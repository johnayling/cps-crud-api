var express = require('express');
var bodyParser = require('body-parser');
var products = require('./routes/products');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='cpsDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/api', products);

module.exports = app;