var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test");

//definicion del schema (amplicion de lo que se puede hacer con model)
var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: String,
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: String,
    campos_biblioteca:{
        ejemplares: Number,
        reservas: Number,
        ultima_reserva: Date
    }
});

LibroSchema.statics.findByTitle = (title,cb)=>{
    console.log("buscando por titulo: " + title);
   return Libro.find({titulo:new RegExp(title,"i")},cb);
}

var Libro = mongoose.model("Libro",LibroSchema);

Libro.findByTitle("lord",(error,data)=>{
    if(error){
        log.error("Error al procesar la busqueda");
    }else{
        data.forEach((libro)=>{
            console.log("Libro encontrado: " + libro.titulo);
        })
    }
});

/*
A nivel de instancia
init
validate
save
remove

A nivel de clase
count
findfindOne
findOneAndUpdate
findOneAndDelete
 */

Libro.findById("583d69961528190c289c340e",(error,data)=>{
    if(error){
        log.error("Error al procesar la busqueda por id");
    }else{
        data.forEach((libro)=>{
            console.log("Libro encontrado: " + libro._id);
        })
    }
});


