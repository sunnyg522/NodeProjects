var http = require('http');
var express = require('express');


http.createServer(onRequest_a).listen(9011);
http.createServer(onRequest_b).listen(9012);
http.createServer(onRequest_c).listen(9013);
http.createServer(onRequest_d).listen(9014);


//Creating Addition Server//
console.log('Starting addition server....');
function onRequest_a (req, res) {
  res.write('Addition server \n');
  res.write('listening on port 9011 for input....\n');
  res.end();
}

setTimeout(function() {
  console.log('stating subtraction server....');
}, 2000);

//Creating subtraction Server//
function onRequest_b (req, res) {
  res.write('Subtraction server \n');
  res.write('listening on port 9012 for input....\n');
  res.end();
}

setTimeout(function() {
  console.log('stating Multiplication server....');
}, 4000);
//Creating multiplication Server//
function onRequest_c (req, res) {
  res.write('Multiplication server \n');
  res.write('listening on port 9013 for input....\n');
  res.end();
}

setTimeout(function() {
  console.log('stating Division server....');
}, 6000);

//Creating Division Server//
function onRequest_d (req, res) {
  res.write('Division server \n');
  res.write('listening on port 9014 for input....\n');
  res.end();
}


setTimeout(function() {
  console.log('starting mid server &');
  console.log('connecting to other server....');
}, 8000);
