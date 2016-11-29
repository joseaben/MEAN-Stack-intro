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
var Libro = mongoose.model("Libro",LibroSchema);

var lotr =  new Libro({titulo:"Lord of the rings",campos_biblioteca:{ultima_reserva:new Date()}});
lotr.save((error)=>{
    if(error){
        console.error("Error al guardar ", error);
    }else{
        Libro.find((error,data)=>{
             console.log(data);

        });
        console.log("Salvado con id: ", lotr._id);
    }
});
