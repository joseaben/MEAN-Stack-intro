var mongoose = require('mongoose');

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


module.exports = mongoose.model("Libro",LibroSchema);