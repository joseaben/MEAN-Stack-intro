$(document).ready(initializeEvents);
function initializeEvents(){
   $(document).mousemove(moveDetected);
}
function moveDetected(event){
    $("#coordX").text("Coordenada X= " + event.clientX);
    $("#coordY").text("Coordenada Y= " + event.clientY);
}