var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test");

//genera el modelo
var Libro = mongoose.model("Libro",{
    titulo: String,
    autor: String,
    paginas: Number
});

var esdla = new Libro({titulo:"El señor de los anillos",autor:"JJ",paginas:3500});

esdla.save((error)=>{
    if(error){console.error("Error al guardar el objeto libro ",error)
    }else{
        console.log("pelicula guardada ", esdla);
    }
});

/*Libro.update({ "_id" : ObjectId("583d4f3a1d13bc0d2c67062e")},{titulo:"Juego de tronos"},(error)=>{
    if(error){console.error("Error al guardar el objeto libro ",error)
    }else{
        console.log("pelicula modificada ");
    }
});*/