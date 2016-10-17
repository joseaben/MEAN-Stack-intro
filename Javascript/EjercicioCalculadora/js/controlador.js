function iniciar(){
    var uno = document.getElementById("uno");
    var pantalla = document.getElementById("pantalla");
    uno.addEventListener('click',pintar);
}
function pintar(){
    pantalla.value = uno.value;
}
addEventListener('load',iniciar);