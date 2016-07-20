var num = require("numeral"); //importing the "numeral" module
var express = require("express"); //importing the "express" module
var app = express(); //creates a placeholder for referencing the express functionality

var carPrice = 12000; //Car price starts at $12,000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/retrieve", function(req, res){ //When the server is told to get the root path, do the following function
    console.log("Returning current price: " + num(carPrice).format('0,0')); //Print the starting price to the console, formatted with commas
    res.send(num); //Sends the text in the parentheses to the page requesting the "/retrieve" path
});//Close the function for the event handler

app.get("/add", function(req, res){ //When the server is told get the path "/add", do the function
    carPrice += 250; //Add 250 to the car price
    confirmCarPriceChange(res); //Calls a function and passes it the response object
});

app.get("/subtract", function(req, res){ //When the server is told to get the path "/subtract", to the function
    carPrice -= 250; //Subtract 250 from the car price
    confirmCarPriceChange(res); //Calls a function and passes it the response object
});

app.listen(3000, function () { //Listen to the port 3000, so that when we go to the server address on port 3,000, we send what is requested.
  console.log("Example app listening on port 3000!");
});


function confirmCarPriceChange(res)
{
  console.log("Adjusted car price"); //Prints to the terminal that you are adjusting the price
  res.send(num); //Sends the text in the parentheses to the page requesting whichever path the function is under
}