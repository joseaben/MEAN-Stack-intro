let moduloDeFiltrado = require("./ejemplo-05-listar-ficheros-module.js");

let directorio = process.argv[2];
let extension = process.argv[3];

moduloDeFiltrado(directorio,extension,queHacerCuandoDevuelvaLosFicheros);

function queHacerCuandoDevuelvaLosFicheros(error,arrayDeFicheros){
    if(error){
        console.error("Error al listar",error);
    }else{
        arrayDeFicheros.forEach((fichero)=>{console.log(fichero);});
    }
}


