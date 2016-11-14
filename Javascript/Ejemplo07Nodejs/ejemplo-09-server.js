var net = require('net');
var puerto = process.argv[2];
var server = net.createServer(miSocket);

function miSocket(socket){
    socket.end("Hola holita!!!!!\n");
    console.log("alguien ha entrado");
}

server.listen(puerto);
console.log("servidor iniciado en el puerto " + puerto);