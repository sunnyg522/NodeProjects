var a=10;
var b=20;
var http = require('http'),
    url = require('url');
var i=1;
if(i==1)
  additionServer();
else if (i==2)
  subtractionServer();
else if (i==3)
  multiplicationServer();
else
  divServer();



function additionServer()
{
  var server = http.createServer().listen(9011, '127.0.0.1');
  server.on('request', function(req, res) {
    var url_parts = url.parse(req.url, true);
    switch(url_parts.pathname) {
      case '/':
        case '/index.html':
          res.write('<html><body>addition of two number<br> check the console log for the result</body></html>');
          //res.write('This is addition of 2 numbers %d', a+b);
          console.log('Adding 2 number %d', a+b)
          break;
          default:
            res.write('Unknown path: ' + JSON.stringify(url_parts));
          }
  res.end();
});
}
function subtractionServer()
{
  var server = http.createServer().listen(9012, '127.0.0.1');
  server.on('request', function(req, res) {
    var url_parts = url.parse(req.url, true);
    switch(url_parts.pathname) {
      case '/':
        case '/index.html':
          res.write('<html><body>subtracting two number<br> check the console log for the result</body></html>');
          //res.write('This is addition of 2 numbers %d', a+b);
          console.log('Subtraction of 2 number %d', a-b)
          break;
          default:
            res.write('Unknown path: ' + JSON.stringify(url_parts));
          }
          res.end();
        });
}
function multiplicationServer()
{
  var server = http.createServer().listen(9013, '127.0.0.1');
  server.on('request', function(req, res) {
    var url_parts = url.parse(req.url, true);
    switch(url_parts.pathname) {
      case '/':
        case '/index.html':
          res.write('<html><body>Multiplication of two number<br> check the console log for the result</body></html>');
          //res.write('This is addition of 2 numbers %d', a+b);
          console.log('Multiply 2 number %d', a*b)
          break;
          default:
            res.write('Unknown path: ' + JSON.stringify(url_parts));
          }
          res.end();
        });
}
function divServer()
{
  var server = http.createServer().listen(9014, '127.0.0.1');
  server.on('request', function(req, res) {
    var url_parts = url.parse(req.url, true);
    switch(url_parts.pathname) {
      case '/':
        case '/index.html':
          res.write('<html><body>Division of two number<br> check the console log for the result</body></html>');
          //res.write('This is addition of 2 numbers %d', a+b);
          console.log('Divide 2 number %f', a/b)
          break;
          default:
            res.write('Unknown path: ' + JSON.stringify(url_parts));
          }
          res.end();
        });
}
