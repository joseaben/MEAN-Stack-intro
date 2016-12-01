var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LibroSchema = new Schema({
    titulo: {
        type: String,
        required: [true,"titulo requerido"],
        validate:{
            validator:(valor)=>{
                return /^[A-Z]/.test(valor);
            },
            message: "No empieza por mayusculas"
        }
    },
    autor: String,
    sinopsis: String,
    fecha: Date,
    categoria: {
        type: String,
        enum: ["aventuras","terror","comedia"],
        require: true
    },
    campos_biblioteca:{
        ejemplares: Number,
        reservas: {
            type: Number,
            min: [1,"Al menos una reserva tu valor {VALUE} no sirve"]
        },
        ultima_reserva: Date
    }
});


module.exports = mongoose.model("Libro",LibroSchema);