$(document).ready(initializeEvents);
function initializeEvents(){
    $("#guardar").click(addRegister);
    $("#borrar").click(deleteRegister);
    loadRegistros();
  
}
function addRegister(){
 $.ajax({
     data:{titulo:$("#titulo").val(),director:$("#director").val(),sipnosis:$("#sipnosis").val(),fecha:$("#fecha").val()},
     type:"POST",
     dataType:"json",
     url:"http://localhost:3000/peliculas"
 }).done(peticionCompletada).fail(peticionFallida);
}
function deleteRegister(){
 $.ajax({
     type:"DELETE",
     dataType:"json",
     url:"http://localhost:3000/peliculas/"
 }).done(peticionCompletada).fail(peticionFallida);
}
function peticionCompletada(data, status){
    $("#titulo").val("");
    $("#director").val("");
    $("#sipnosis").val("");
    $("#fecha").val("");
    loadRegistros();
}
function peticionFallida(jqXHR, status, error){
    alert("Error al procesar la peticion");
    console.log("Status : " + status);
    alert.log("Error! " + error);
}
function loadRegistros(){
    $("table").empty();
    $("table").append("<tr><td>ID</td><td>TITULO</td><td>DIRECTOR</td><td>SIPNOSIS</td><td>FECHA</td></tr>");
    $.get("http://localhost:3000/peliculas",resultadoGet);
}
function resultadoGet(data,status){
    if(status == "success"){
        for(let peliculas = 0; peliculas < data.length;peliculas++){
            $("table").append("<tr><td>" + data[peliculas].id +"</td>"+"<td>"+data[peliculas].titulo+"</td>"+"<td>"+data[peliculas].director+"</td>"+"<td>"+data[peliculas].sipnosis+"</td>"+"<td>"+data[peliculas].fecha+"</td></tr>");
        }
         $("tr").click(presionFila);
    }

}
function presionFila(){
    let filaActual = $(this);
    alert($(this).find('td').html());
}