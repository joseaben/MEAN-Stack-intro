var arrayNumeros = new Array();
var miCalculadora;
var operador;
function iniciar(){
    miCalculadora = new Calculadora();
    //var arrayNumeros = new Array();

    //var pantalla = document.getElementById("pantalla");
    //var resultado = document.getElementById("resultado");
    var memorizar = document.getElementById("memorizar");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicar = document.getElementById("multiplica");
    var dividir = document.getElementById("division");
    var limpiar = document.getElementById("limpiar");
    resultado.addEventListener('click',accionARealizar);
    memorizar.addEventListener('click',accionARealizar);
    suma.addEventListener('click',accionARealizar);
    resta.addEventListener('click',accionARealizar);
    division.addEventListener('click',accionARealizar);
    multiplica.addEventListener('click',accionARealizar);
    limpiar.addEventListener('click',accionARealizar);
    for(let numero = 0; numero < 10; numero++){
      arrayNumeros[numero] = document.getElementById(numero.toString());
      arrayNumeros[numero].addEventListener('click',accionARealizar);
    }

}
function pintar(e){
  var elemento = e.target;
  var operador;
  switch(elemento.value){
    case '=':
      break;
    case '+':
        operador = elemento.value;
        break;
    case '-':
      operador = elemento.value;
      break;
    case '*':
      operador = elemento.value;
      break;
    case '\\':
      operador = elemento.value;
      break;
    default:
      pantalla.value += elemento.value;

  }

  miCalculadora.operar(operador,elemento.value);

}
function accionARealizar(e){
  let elemento = e.target;
  switch(elemento.value){
    case '=':
    resultado.value = "Pepe popo";
      break;
    case '+':
        operador = elemento.value;
        break;
    case '-':
      operador = elemento.value;
      break;
    case '*':
      operador = elemento.value;
      break;
    case '\\':
      operador = elemento.value;
      break;
    default:
    if(miCalculadora.getMemoria == 0){
      //miCalculadora.setMemoria(elemento.value);
    }
    if(operador != undefined){
      pantalla.value = elemento.value;
    }else {
      pantalla.value += elemento.value;
      alert(pantalla.attributes.getNamedItem("type").nodeValue);
    }
  }

}

addEventListener('load',iniciar);
