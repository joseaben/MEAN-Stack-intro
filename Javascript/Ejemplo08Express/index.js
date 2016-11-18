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


var routerRest = express.Router();

routerRest.route("/coches").get((request,response)=>{
    response.json([{_id:1,marca:"opel",modelo:"corsa"},{_id:2,marca:"audi",modelo:"A4"}]);
}).post((request,response)=>{
    //recoger la informacion del body para crear un nuevo coche
    /*request.body.marca
    request.body.modelo*/
    response.json({message:"correcto"});
});
//localhost:8080/concesionario/coches/idCoche
routerRest.route("/coches/:alias").get((request,response)=>{
    //TODO: obtener el coche a partir de su idCoche
    response.json({_id:1,marca:"opel",modelo:"corsa"})
}).delete((request,response)=>{
    response.json({message:"borrado"});
}).put((request,response)=>{
    //TODO: obtener el id y del body obtener marcar y modelo
    response.json({message:"actualizado"});
});

app.use("/concesionario",routerRest);
app.listen(8080);
console.log("Servidor Iniciado");

/*
    Response permite :
    download() end() json() jsonp() redirect() render()
    send() sendFile() sendStatus()
*/