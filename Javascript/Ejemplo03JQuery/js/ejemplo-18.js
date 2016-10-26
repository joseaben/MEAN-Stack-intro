$(document).ready(initializeEvents);
function initializeEvents(){
    $("#peticion_ajax").click(peticionAjaxGenerica);
}
function peticionAjaxGenerica(){
  /* $.ajax({
       //Puede ser uma cadena, un array o un object de JS
       //?nombre=Jose&nivel_de_cafe=medio
       data: {nombre:"Jose",nivel_de_cafe:"medio"},
       //tipo de peticion http
       type:"GET",
       //tipo de dato esperado
       dataType: "json",
       //URL de comunicacion con el servicio
       url: "https://jsonplaceholder.typicode.com/users"
   }).done(peticionCompletada).fail(peticionFallida);*/
   pruebasConGetYPost();
}
function peticionCompletada(data, status){
    alert("Peticion Completada " + status + " : " + data);
    //$("#contenido_de_ajax").html(data[7].username);
}
function peticionFallida(jqXHR, status, error){
    alert("Error al procesar la peticion");
    console.log("Status : " + status);
    alert.log("Error! " + error);
}
function pruebasConGetYPost(){
    $.get("http://localhost:8080/ejemplo-17-fichero_alojado_en_servidor.txt",resultadoGet);
    $.post("http://localhost:8080/ejemplo-17-fichero_alojado_en_servidor.txt",resultadoPost);
}
function resultadoGet(data,status){
    alert("resultado : " + data);

}
function resultadoPost(){
    alert("metodo Post correcto!");

}