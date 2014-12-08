var http = require('http'),
url = require('url');
function sayHello() {
  var Select_value;
  var a = document.getElementById("fvalue").value;
  var b = document.getElementById('svalue').value;
  var x = document.getElementById("operations");
  Select_value = x.options[x.selectedIndex].text;
  //alert(a);
  //alert(b);
  //alert(Select_value);

var operation = Select_value;
//alert(operation);
if(operation=="Addition")
  {//alert("addition")
  additionServer();}
else if(operation == "Subtraction")
  subtractionServer();
else if(operation == "Multiplication")
  multiplicationServer();
else
  divServer();

        function additionServer()
        {
          alert("inside addition function")
          var server = http.createServer().listen(9011, '127.0.0.1');
          server.on('request', function(req, res) {
            var url_parts = url.parse(req.url, true);
            switch(url_parts.pathname) {
              case '/':
                case '/index.html':
                  res.write('<html><body>addition of two number<br> check the console log for the result</body></html>');
                  res.write(a+b);
                  //res.write('This is addition of 2 numbers %d', a+b);
                  console.log('Adding 2 number %d', a+b)
                  alert("done additon");
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
}
