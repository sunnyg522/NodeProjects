var http = require('http');
var express = require('express');
http.createServer(onRequest_a).listen(9011);
http.createServer(onRequest_b).listen(9012);
http.createServer(onRequest_c).listen(9013);
http.createServer(onRequest_d).listen(9014);


function onRequest_a (req, res) {
  res.write('Response from 9011\n');
  res.end();
}

function onRequest_b (req, res) {
  res.write('Response from 9012\n');
  res.end();
}

function onRequest_c (req, res) {
  res.write('Response from 9013\n');
  res.end();
}

function onRequest_d (req, res) {
  res.write('Response from 9014\n');
  res.end();
}
