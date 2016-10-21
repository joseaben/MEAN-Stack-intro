$(document).ready(inicializarEventosConJQuery);
function presionarBotonConJquery(){
    alert("Boton jquery pulsado");
}
function inicializarEventosConJQuery(){
    $("#botonjquery1").click(presionarBotonConJquery);
    $("#botonjquery2").click(presionarBotonConJquery);
}