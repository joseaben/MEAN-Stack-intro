var express = require('express');
var app = express();

function evaluaElVerboHttp(request,response){
    response.send("ruta : " + request.originalUrl + " Verbo : " + request.method);
}
app.get("/",(request,response)=>{
    console.log("Acceso a la peticion ",request);
    response.send("Respuesta recibida");
});

app.post("/", evaluaElVerboHttp);
app.put("/", evaluaElVerboHttp);
app.delete("/", evaluaElVerboHttp);

app.all("/para/+*/todos", evaluaElVerboHttp);

app.get("/clientes/:idCliente/facturas/:idFactura", (request,response)=>{
    response.send("Resultados : " + JSON.stringify(request.params));
});


app.get("/save/:fichero.:extension", (request,response)=>{
    response.send("Ahora genero un fichero de tipo : " + request.params.extension);
});

function funcionIntermedia(request,response,next){
    console.log("Mensaje ejecutado a las : " + new Date());
    next();
}

app.get("/concatenado", funcionIntermedia,(request,response)=>{
    response.send("Enviado");
});


app.route("/rutaconjunta").get(evaluaElVerboHttp).post(evaluaElVerboHttp).put(evaluaElVerboHttp).delete(evaluaElVerboHttp);

//var router = require("../rutasDeClientes.js");
var router  = express.Router();
//se usa con cualquier uso del nuevo router
router.use(funcionIntermedia);
router.get("/conrouter",evaluaElVerboHttp);
router.post("/conrouterpost",evaluaElVerboHttp);

app.use("/cosacuca",router);

app.listen(8080);
console.log("Servidor Iniciado");