var express = require('express');
var app = express();

var path = require('path');

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../node_client/api_example.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});