$(document).ready(inicializarEventos);
function inicializarEventos(){
    $("#titulo1").click(presionTitulo1);
    $("#titulo2").click(presionTitulo2);
}

function presionTitulo1(){
    let mi_titulo = $("#titulo1");
   /* mi_titulo.css("color", "#ff0000"); //directivas css
    mi_titulo.css("background-color", "#ffff00");
    mi_titulo.css("font-family", "Courier");*/
    mi_titulo.css({"color":"#ff0000","background-color":"#ffff00"});
}
function presionTitulo2(){
    let mi_titulo = $("#titulo2");
    mi_titulo.css("color", "#ffff00"); //directivas css
    mi_titulo.css("background-color", "#ff0000");
    mi_titulo.css("font-family", "Arial");
}