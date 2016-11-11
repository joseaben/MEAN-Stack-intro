let http = require("http");

http.get("http://www.google.es",(respuesta)=>{
    respuesta.setEncoding("utf-8");
    respuesta.on("data",console.log);
    respuesta.on("error",console.error);
}).on("error",console.error);