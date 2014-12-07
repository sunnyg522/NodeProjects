var http = require('http');
//var app = express();

http.createServer(createServers).listen(9010);

function createServers (req, res)
{
  res.write('Mid server is up and running on port 9010 \n');
  console.log("Mid servers is communicating to  all other server");
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
  res.end();


}
