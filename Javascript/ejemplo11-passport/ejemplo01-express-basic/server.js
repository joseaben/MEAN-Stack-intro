var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;

var app = express();

app.use((request,response,next)=>{
    //request.headers.origin para aceptar todas las peticiones que te vengan
    response.header('Access-Control-Allow-Origin',request.headers.origin);
    response.header('Access-Control-Allow-Headers','Authorization');
    next();
});
passport.use(new Strategy((username,password,done)=>{
    console.log("username: " + username + "pass: " + password);
    //aqui dentro evaluo si el usuario existe
    if(username == "luis" && password == "luis"){
        //dejamos que acceda al siguiente nivel
        done(null,true);
    }else{
        //operaciones que se hacen si no es valido el user y pass
        done(null,false);
        console.log("Acceso denegado");
    }

}));

app.get("/home",passport.authenticate('basic',{session:false}),(request,response)=>{
    console.log("acceso permitido");
    response.send("acceso concedido");
});


app.listen(8080);
console.log("servidor inicializado en el puerto 8080");