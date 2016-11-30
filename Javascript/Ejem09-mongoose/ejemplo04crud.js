var mongoose = require("mongoose");

mongoose.connect("localhost:27017/test");

var Libro = require("./ejemplo04model");


function getLibros(){
    // return Libro.find() //paginad!!
}

function getLibro(_id){
    Libro.findById(_id,(error,libro)=>{
        //TODO:
    })
}

function saveLibro(libro){
    libro.save((error)=>{
        //TODO:
    })
}

function updateLibro(libro){
    //TODO:
    saveLibro(libro);
}

function  deleteLibro(_id){
    Lbro.findByIdAndRemove(_id,()=>{

    })
}