var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var products = require('./routes/products');
var licenses = require('./routes/licenses');
var generators = require('./routes/generators');

var app = express();

//connect to database
//Ideally you will obtain DB details from a config file

var dbName='cpsDB';
var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/api', products);
app.use('/api', licenses);
app.use('/api', generators);

module.exports = app;