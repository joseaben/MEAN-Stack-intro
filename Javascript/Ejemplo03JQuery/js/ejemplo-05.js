$(document).ready(initializeEvents);
function initializeEvents(){
    $("#boton1").click(addHtmlForm);
    $("#boton2").click(alertHtmlForm);
}
function addHtmlForm(){
    $("#formulario").html('<form action="#">Ingrese nombre:<input type="text" nombre="nombre"/><br/>Contrase&ntilde;a:&nbsp;<input type="password name="pass"/><br/><input type="submit" value="Enviar"/></form>');

}
function alertHtmlForm(){
    alert($("#formulario").html());
}