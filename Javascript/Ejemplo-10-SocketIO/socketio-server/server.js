const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//('*:*') puede ser ('http://localhost:4200 http://localhost:3200')
io.origins('*:*');

//Por defecto tenemos ya namespace
//http://localhost:3000/socket.io lo vamos a cambiar a http://localhost:3000/chat/socket.io
var chat = io.of("/chat");

chat.on('connection',(socket)=>{
    console.log("Cliente conectado!!");
    socket.on('mando-un-mensaje',(mensaje)=>{
        console.log('mensaje recibido : ',mensaje);
       // socket.emit('mando-un-mensaje',mensaje); //socket es el cliente
        chat.emit('mando-un-mensaje',mensaje); //io son todos los clientes
        //socket.broadcast.emit('mando-un-mensaje',mensaje); // todos menos al cliente que ha mandado el mensaje
    });
});

chat.on('disconnect',(socket)=>{
    console.log('Cliente desconectado !!');
});

http.listen(3000,()=>{
    console.log("Iniciado en el puerto *:3000");
});

