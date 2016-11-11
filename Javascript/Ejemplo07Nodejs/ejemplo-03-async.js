let fs = require('fs');
let fichero = process.argv[2];
fs.readFile(fichero,miFuncionAsincrona);
function miFuncionAsincrona(error,contenido){
    if(error){
        console.error("Error al ejecutar la funcion asincrona ",error);
    }else{
        let numeroDeFilas = contenido.toString().split('\n').length;
        console.log("filas del fichero" + fichero + "\nLineas " + numeroDeFilas);
        console.log("Contenido leido : " + contenido);
    }


}
console.log("hola, esto se escribe antes o despues de leer el fichero");

