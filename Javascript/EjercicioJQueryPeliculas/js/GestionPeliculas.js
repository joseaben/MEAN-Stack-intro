$(document).ready(initializeEvents);
function initializeEvents(){
    $("#guardar").click(addRegister);
}
function addRegister(){
    alert("pasa");
    $("table").append("<tr><td>prueba</td></tr>");
}