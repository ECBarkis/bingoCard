//Required fileSystems for the readFile function
const fs = require('fs');

//Creating a module to handle request and response for the app.js
module.exports = function(request, response){

    //Checking if request is for root route.
    //If the request is for the root route fileSystems will read the html, then fire the callback.
    //If the callback catches any errors it will console log the errors, and responsed with a 404 status.
    //Else responsed with a 200 status, the html, and end the response.
    if(request.url === '/'){
        fs.readFile('./views/bingoCard.html', 'utf8', function(errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(404);
                response.end('File not found!!!');
            }else{
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
            }
        })

    //Checking if request is for css.
    //If the request is for '/stylesheets/style.css' fileSystems will read the css, then fire the callback.
    //If the callback catches any errors it will console log the errors, and responsed with 404 status.
    //Else responed with 200 status, the css, and end the response.
    }else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(404);
                response.end('File not found!!!');
            }else{
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(contents);
                response.end();
            }
        })
    //Checking if request is for javascript.
    //If the request is for '/scripts/bingoCard.js' fileSystems will read the javascript, the fire the callback.
    //If the callback catches any errors it will console log the errors, and responed with 404 status.
    //Else responed with 200 status, the javascript, and end the response.
    }else if(request.url === '/scripts/bingoCard.js'){
        fs.readFile('./scripts/bingoCard.js', 'utf8', function(errors, contents){
            if(errors){
                console.log(errors);
                response.writeHead(404);
                response.end('File not found!!!');
            }else{
                response.writeHead(200, {'Content-type': 'text/javascript'});
                response.write(contents);
                response.end();
            }
        })

    //This will catch anything that slips thru and responed with a 404 status.
    }else{
        response.writeHead(404);
        response.end('File not found!!!');
    }
}