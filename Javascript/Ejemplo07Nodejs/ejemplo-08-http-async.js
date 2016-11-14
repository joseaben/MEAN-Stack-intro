var http = require('http');
var bl = require('bl');

var results = [];
var urls = ["http://www.google.es","http://www.amazon.es"];
var count = 0;

function mostrarResultados(){
    for(let i = 0; i < urls.length;i++){
        console.log("URL: " + urls[i] + "\nNumeros caracteres: " + results[i].length);
    }
}
for(let i= 0; i < urls.length;i++){
    httpGet(i);
}

function httpGet(indice){
    console.log("Comprobando " + urls[indice]);
    http.get(urls[indice],(respuesta)=>{
        respuesta.pipe(bl((error,datos)=>{
            if(error){
                console.log(error);
            }else{
                results[indice] = datos.toString();
                count++;
                if(count === urls.length){
                    mostrarResultados();
                }
            }
        }));
    });
}