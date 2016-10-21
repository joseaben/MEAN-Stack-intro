addEvent(window,'load',inicializarEventos,false);
function addEvent(elemento,nomevento,funcion,captura){
    if(elemento.attachEvent){
        elemento.attachEvent('on' + nomevento,funcion);
        return true;
    }else{
        if(elemento.addEventListener){
            elemento.addEventListener(nomevento,funcion,captura);
            return true;
        }
        return false;
    }

}
function presionarBotonConJavascript(e){
    alert("Boton js pulsado");
}
function inicializarEventos(){
    let botonjs1 = document.getElementById("botonjs1");
    addEvent(botonjs1,'click',presionarBotonConJavascript,false);
    let botonjs2 = document.getElementById("botonjs2");
    addEvent(botonjs2,'click',presionarBotonConJavascript,false);
}