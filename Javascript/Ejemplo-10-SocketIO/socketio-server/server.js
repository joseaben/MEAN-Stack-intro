const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//('*:*') puede ser ('http://localhost:4200 http://localhost:3200')
io.origins('*:*');

//Por defecto tenemos ya namespace
//http://localhost:3000/socket.io
io.on('connection',(socket)=>{
    console.log("Cliente conectado!!");
    socket.on('mando-un-mensaje',(mensaje)=>{
        console.log('mensaje recibido : ',mensaje);
       // socket.emit('mando-un-mensaje',mensaje); //socket es el cliente
        io.emit('mando-un-mensaje',mensaje); //io son todos los clientes
        //socket.broadcast.emit('mando-un-mensaje',mensaje); // todos menos al cliente que ha mandado el mensaje
    });
});

io.on('disconnect',(socket)=>{
    console.log('Cliente desconectado !!');
});

http.listen(3000,()=>{
    console.log("Iniciado en el puerto *:3000");
});

