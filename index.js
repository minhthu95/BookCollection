var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("My deployment github repository can be found at https://github.com/minhthu95/DeployToAzure");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);