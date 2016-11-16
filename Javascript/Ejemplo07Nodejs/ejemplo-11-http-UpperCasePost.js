var http = require('http');
var map = require('through2-map');

var server = http.createServer(
    function(request,response){
        if(request.method !=='POST'){
            return response.end("Mandemelo por post, anda majo!!!!");
        }else{
            request.pipe(map(function(chunk){
                console.log("contenido :" + chunk.toString());
                return chunk.toString().toUpperCase();
            })).pipe(response);
        }
    }
);

server.listen(8885);
console.log("Servidor funcionando");