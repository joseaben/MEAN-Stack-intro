let fs = require('fs');
let path = require("path");
let directorio = process.argv[2];
let extension = process.argv[3];

fs.readdir(directorio,operarConResultados);

function operarConResultados(error,ficheros){
    if(error){
        console.error("Error al leer el directorio",error);
    }else{
        console.log("Funcion normal");
        ficheros.forEach(operacionPorFichero)
    }
}
function operacionPorFichero(fichero){
    if(path.extname(fichero) == extension){
        console.log(fichero);
    }
}
//fat arrow
fs.readdir(directorio,(error,ficheros)=>{
     if(error){
        console.error("Error al leer el directorio",error);
    }else{
        console.log("Funcion fat arrow")
        ficheros.forEach((fichero)=>{
            if(path.extname(fichero) == extension){
                console.log(fichero);
            }
        });
    }
   } );