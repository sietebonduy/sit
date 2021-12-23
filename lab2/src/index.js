var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var array = [];

app.route('/create').post(bodyParser.text(), function (req, res) {
  array.push(req.body);
  res.json({ message: 'Array changed' });
});

app.route('/list').get(function (req, res) {
  res.send(array);
});

http.createServer(app).listen(8080);
