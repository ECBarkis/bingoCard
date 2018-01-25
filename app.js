//Using the http module to deal with request and response objects.
//The module static_contents contains all the routing rules.
const http = require('http');
const static_contents = require('./static_contents');

//Create a server using the http module.
//Pass the request and response object to the static_contents function.
const server = http.createServer(function(request, response){
    // console.log('client request URL:', request.url);
    static_contents(request, response);
});

//Have the server listening for any request on port 8000.
//Console log that the server is listening on port 8000.
server.listen(8000);
console.log('listening on port 8000');