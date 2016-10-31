$(document).ready(iniciar);
var miCalculadora;
var operador;
var pantalla;
var result;
var limpiarPantalla;
var mostradoResultado;

function iniciar(){
    miCalculadora = new Calculadora();
    limpiarPantalla = true;
    mostradoResultado = false;

    pantalla = $("#pantalla");
    $("#resultado").click(accionARealizar);
    $("#memorizar").click(accionARealizar);
    $("#memorecall").click(accionARealizar);
    $("#suma").click(accionARealizar);
    $("#resta").click(accionARealizar);
    $("#multiplica").click(accionARealizar);
    $("#division").click(accionARealizar);
    $("#limpiar").click(accionARealizar);
    $("#punto").click(accionARealizar);

    for(let numero = 0; numero < 10; numero++){
      $("#" +numero.toString()).click(accionARealizar);
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
        if(!(pantalla.val()).match(/\./)){
          pantalla.val(pantalla.val() +  '.');
          limpiarPantalla = false;
        }
        break;
      case 'M+':
        miCalculadora.setAlmacenValor(pantalla.val());
        break;
      case 'MR':
        pantalla.val(miCalculadora.getAlmacenValor());
        break;
      case 'C':
        miCalculadora.borrar();
        pantalla.val(0);
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
  pantalla.val(miCalculadora.operar(operador,pantalla.val()));
  miCalculadora.setMemoria(pantalla.val());
  mostradoResultado = true;
};
function accionOperador(elemento){
  miCalculadora.setMemoria(pantalla.val());
  operador = elemento.value;
  limpiarPantalla = true;
  mostradoResultado = false;
};
function accionNumerica(elemento){
  if(limpiarPantalla){
    pantalla.val(elemento.value);
    limpiarPantalla = false;
  }else{
   pantalla.val(pantalla.val() + elemento.value);
  }
};
