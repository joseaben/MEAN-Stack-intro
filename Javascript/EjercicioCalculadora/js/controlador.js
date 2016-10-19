var miCalculadora;
var operador;
var pantalla;
var result;
function iniciar(){
    miCalculadora = new Calculadora();
    var arrayNumeros = new Array();

    pantalla = document.getElementById("pantalla");
    var resultado = document.getElementById("resultado");
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
}
function accionARealizar(e){
  let elemento = e.target;

  switch(elemento.value){
    case '=':
      if(result != undefined){
        pantalla.value = result;
        result = undefined;
        operador = undefined;
      }
      break;
    case '+':
        operador = elemento.value;
        if(result != undefined){
          pantalla.value = result;
        }
        break;
    case '-':
      operador = elemento.value;
      if(result != undefined){
        pantalla.value = result;
      }
      break;
    case '*':
      operador = elemento.value;
      if(result != undefined){
        pantalla.value = result;
      }
      break;
    case '\/':
      operador = elemento.value;
      if(result != undefined){
        pantalla.value = result;
      }
      break;
    default:
    if(miCalculadora.getMemoria() == 0){
      miCalculadora.setMemoria(elemento.value);
    }
    if(operador != undefined){
      pantalla.value = elemento.value;
      result = miCalculadora.operar(operador,pantalla.value);
      operador = undefined;
    }else {
      pantalla.value += elemento.value;
    }
  }

}

addEventListener('load',iniciar);
