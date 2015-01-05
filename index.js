var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World. this is the first example on how to create a http webservice\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');