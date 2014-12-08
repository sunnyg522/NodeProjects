var http = require('http'),
url = require('url');
var prompt = require('prompt');


  var a;
  var b;
  var c;
  var i;
  console.log('Please enter the following values for operator:');
  console.log('1 Addition');
  console.log('2 Subtraction');
  console.log('3 Multiplication');
  console.log('4 Division');
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['valueA', 'valueB', 'OperationVlaue'], function (err, result) {
    //
    // Log the results.
    //
    a = parseInt(result.valueA);
    b = parseInt(result.valueB);
    c = a+b;
    i = parseInt(result.OperationVlaue)
    console.log('Command-line input received:');

    console.log('  Value a: ' + result.valueA);
    console.log('  value b: ' + result.valueB);
    //console.log('  adding values %d', c)
    //console.log('  adding value a and b');
    if(i==1){
      additionServer();
      console.log('inside addition');
    }
    else if (i==2)
      {
      subtractionServer();
      console.log('inside sub server');
    }
      else if (i==3)
        {
        multiplicationServer();
        console.log('inside Multiplication');
      }
        else
          {
            console.log('inside Div Server');
          divServer();
        }
  });



//console.log("inside addition");
function additionServer()
{
  //console.log('inside addition 2');
  var server = http.createServer().listen(9011, '127.0.0.1');
  server.on('request', function(req, res) {
    var url_parts = url.parse(req.url, true);
    switch(url_parts.pathname) {
      case '/':
        case '/':
          res.write('<html><body>addition of two number<br> check the console log for the result</body></html>');
          //res.write('This is addition of 2 numbers %d', a+b);
          console.log('Adding 2 number %d', a+b)
          console.log('inside addition 2');
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
        case '/':
          res.write('<html><body>subtraction of two number<br> check the console log for the result</body></html>');
          //res.write('This is addition of 2 numbers %d', a+b);
          console.log('sub 2 number %d', a-b)
          console.log('inside sub 2');
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
        case '/':
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
        case '/':
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
