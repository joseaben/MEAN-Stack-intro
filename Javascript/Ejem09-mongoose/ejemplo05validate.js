var mongoose = require("mongoose");

mongoose.connect("localhost:27017/test");

var Libro = require("./ejemplo05model");

miLibroDeHistoria = new Libro({titulo:"Titulo libro",campos_biblioteca:{reservas:1},categoria:"terror"});
//miLibroDeHistoria = new Libro();

miLibroDeHistoria.save((error)=>{
    if(error){
        console.log("el libro no se ha guardado!!");
        lista_campos = ['titulo','campos_biblioteca.reservas','categoria'];
        lista_campos.forEach((campo)=> {
           if(error.errors[campo]){
            console.error(error.errors[campo].message)
        }
        });
        /*if(error.errors['titulo']){
            console.error(error.errors['titulo'].message)
        }else if(error.errors['campos_biblioteca.reservas']){
            console.error(error.errors['campos_biblioteca.reservas'].message);
        }*/
    }else{
        console.log("Guardado con id: ",miLibroDeHistoria._id);
    }
});