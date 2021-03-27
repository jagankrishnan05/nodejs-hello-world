
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from Jaganath !");

});

var port = 8082;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
