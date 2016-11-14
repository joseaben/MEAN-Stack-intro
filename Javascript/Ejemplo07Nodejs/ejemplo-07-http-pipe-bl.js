var http = require('http');
var bl = require('bl');//bufferList

http.get("http://www.google.es",(response)=>{
    //comunicacion lenta, almacenamiento en buffer
    response.pipe(
        bl((error,data)=>{
            if(error){
                return console.error("Error al procesar la peticion",error);
            }else{
                data = data.toString();
                console.log("Numero de caracteres : " + data.length);
                console.log("data: \n" + data);
            }
        })
    );
});
