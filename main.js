var http = require("http");
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8081);
console.log('server runining at http://127.0.0:8081/');