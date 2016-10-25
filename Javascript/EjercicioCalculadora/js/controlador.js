var miCalculadora;
var operador;
var pantalla;
var result;
var limpiarPantalla;
var mostradoResultado;
function iniciar(){
    miCalculadora = new Calculadora();
    var arrayNumeros = new Array();
    limpiarPantalla = true;
    mostradoResultado = false;

    pantalla = document.getElementById("pantalla");
    var resultado = document.getElementById("resultado");
    var memorizar = document.getElementById("memorizar");
    var memorecall = document.getElementById("memorecall");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicar = document.getElementById("multiplica");
    var dividir = document.getElementById("division");
    var limpiar = document.getElementById("limpiar");
    var punto = document.getElementById("punto");

    resultado.addEventListener('click',accionARealizar);
    memorizar.addEventListener('click',accionARealizar);
    memorecall.addEventListener('click',accionARealizar);
    suma.addEventListener('click',accionARealizar);
    resta.addEventListener('click',accionARealizar);
    division.addEventListener('click',accionARealizar);
    multiplica.addEventListener('click',accionARealizar);
    limpiar.addEventListener('click',accionARealizar);
    punto.addEventListener('click',accionARealizar);

    for(let numero = 0; numero < 10; numero++){
      arrayNumeros[numero] = document.getElementById(numero.toString());
      arrayNumeros[numero].addEventListener('click',accionARealizar);
    }

}
function accionARealizar(e){
  let elemento = e.target;

  if(elemento.value == '+' || elemento.value == '-' || elemento.value == '*' || elemento.value == '\/'){
     if(operador && !limpiarPantalla && !mostradoResultado){
        accionResultado();
      }
      accionOperador(elemento);
  }else{
      switch(elemento.value){
      case '.':
        if(!(pantalla.value).match(/\./)){
          pantalla.value += '.';
          limpiarPantalla = false;
        }
        break;
      case 'M+':
        miCalculadora.setAlmacenValor(pantalla.value);
        break;
      case 'MR':
        pantalla.value = miCalculadora.getAlmacenValor();
        break;
      case 'C':
        miCalculadora.borrar(pantalla);
        limpiarPantalla = true;
        break;
      case '=':
        accionResultado();
        break;
      default:
      accionNumerica(elemento);
    }
  }
};

function accionResultado(){
  pantalla.value = miCalculadora.operar(operador,pantalla.value);
  miCalculadora.setMemoria(pantalla.value);
  mostradoResultado = true;
};
function accionOperador(elemento){
  miCalculadora.setMemoria(pantalla.value);
  operador = elemento.value;
  limpiarPantalla = true;
  mostradoResultado = false;
};
function accionNumerica(elemento){
  if(limpiarPantalla){
    pantalla.value = elemento.value;
    limpiarPantalla = false;
  }else{
   pantalla.value += elemento.value;
  }
};

addEventListener('load',iniciar);
