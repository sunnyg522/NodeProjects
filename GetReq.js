
var express = require('express');
var app = express();
var Select_value;
var a = document.getElementById('fvalue').value;
var b = document.getElementById('svalue').value;

function sayHello() {
  var x = document.getElementById("operations");
  Select_value = x.options[x.selectedIndex].text;
  alert(a);
  alert(Select_value);
  callingServerVariables(Select_value);
}

function callingServerVariables (operation)
{
  //alert(operation);
if(operation=="Addition")
  {//alert("testing");
  addingNumber();
}
else if(operation == "Subtraction")
  subtractionNumbers();
else if(operation == "Multiplication")
  multiplicationNumberS();
else
  divNumbers();

function addingNumber()
{
app.get('/', function(req, res){
  res.send('addition server');
});

app.listen(9011);
}

function subtractionNumbers(){
app.get('/', function(req, res){
  res.send('subtracting 2 numbers');
});

app.listen(9012);
}

function multiplicationNumberS()
{
app.get('/', function(req, res){
  res.send('hello world 3');
});

app.listen(9013);}
function divNumbers()
{
app.get('/', function(req, res){
  res.send('hello world 4');
});

app.listen(9014);
}
}
//}
