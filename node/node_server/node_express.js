var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! What\'s good?');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});

app.get('/tarus', function (req, res) {
  var responseText ="";

  	responseText += "Daily horoscope";
  	responseText += "<http://moores.orangeye.netdna-cdn.com/wp-content/uploads/2015/09/horoscope.jpg'>";

  	res.send(responseText);


});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});