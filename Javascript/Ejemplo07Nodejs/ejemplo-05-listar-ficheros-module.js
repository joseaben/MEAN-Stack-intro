let fs = require('fs');
let path = require("path");

module.exports = function(directorio,extension,callback){

fs.readdir(directorio,(error,ficheros)=>{
     if(error){
        //console.error("Error al leer el directorio",error);
        callback(error);
    }else{
        //console.log("Funcion fat arrow")
        //filtro el contenido de ficheros
        ficheros.filter((fichero)=>{return path.extname(fichero) === "." +extension;});
        callback(null,ficheros);
    }
   });

}