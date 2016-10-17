console.log("Hola mundo!");
variablesGlobales = "variableGlobal";
var variablesGlobalesConVar = "Sigue siendo una variable global"
mi_funcion_con_var();
mi_funcion_con_let();
function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local"
    for(var i = 0;i < 10;i++){
        console.log("Valor de i "+i);
    }
    console.log("valor de i al final "+i);
}
function mi_funcion_con_let(){
    let otraVariable = "Esto es una variable local"
    for(let i = 0;i < 10;i++){
        console.log("Valor de i "+i);
    }
    //TODO: Buscar una condicion para evaluar si la variable existe
    //console.log("valor de i al final "+i);
}
console.log("Tipos de datos");
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "siete";
var fechaDeEstreno = new Date();//2016
var array = [1, 2];
var otraFecha = fechaDeEstreno;
otraFecha.setFullYear(1989);
console.log("Fecha de estreno " + fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);
function cambiarYear(fecha){
    //TODO: Asegurarse que lo que llega es de tipo fecha
    fecha.setFullYear(2011);
    console.log("Fecha de la funcion " + fecha.getFullYear());
}
console.log("Fecha de la funcion " + otraFecha.getFullYear());
console.log("resultado typeof numerico " +typeof tipoDeDatoNumerico);
console.log("resultado typeof cadena " +typeof tipoDeDatoCadena);
console.log("resultado typeof objeto " +typeof fechaDeEstreno);
console.log("resultado typeof array " +typeof array);

pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);
    console.log("valor almacenado "+ numero.valueOf() );
    console.log("valor almacenado "+ numero.toFixed() );
    console.log("valor almacenado "+ numero.toFixed(4) );
}
function pruebaDeArgumentos(argumento1){
    console.log("Numero de parametros enviados " + arguments.length);
    console.log("Numero de argumentos esperados " + arguments.callee.length);
    for(let i = 0; i < arguments.length; i++){
        console.log("Posicion : " + i + "valor : " + arguments[i]);
    }
}
pruebaDeArgumentos();
pruebaDeArgumentos(1);
pruebaDeArgumentos("pepe",1,3, "otro", new Date());

function sumar(a, b){
    var suma = 0;
    var contador = 0;
    if(arguments.length < arguments.callee.length){
        console.log("hay menos argumentos de los esperados");
      return;
    }
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] == 'number'){
           suma += arguments[i]; 
           contador ++;
        }else{
            console.log("Este argumento no es numerico " + arguments[i]);
        }
    }
    if(contador >= 2){
        console.log("la suma es : " + suma);    
    }
    
}
sumar(2,new Date(), 3);
sumar(1, "Pedro","Luis");
sumar(1,2,3,4,5,"pepe",7, "luis");

console.log("Inicio de ejemplos de js de arrays");
function testConArrays(){
    let mi_array = new Array();
    mi_array[0] = 7;
    mi_array[1] = "valor";
    mi_array[mi_array.length-1];
    let mi_otro_array =[];
    let otro = ["uno",2,new Date()];
    //Arrays asociativos
    let array_asociativo = new Array();
    array_asociativo['uno'] = 1;
    console.log("Aarray asociativo " + array_asocitivo['uno']);
    let persona = new Array();
    persona.nombre = "Ruben";
    persona.apellido1 = "Gomez";
    persona.pruebaDeArgumentos = pruebaDeArgumentos;
    presona.pruebaDeArgumentos();
    console.log("nombre completo " + persona.nombre + "" + persona.apellido1);

}

console.log("Adios mundo cruel!");

//Clases
function MiClase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;
    this.miMetodo = function (){
     return this.clave1 + "-" + this.clave2;
    };
}
MiClase.prototype.miMetodo = function (){
     return this.clave1 + "-" + this.clave2;
    };

var miObjeto = new MiClase("uno","dos");

console.log("El valor de la clave 1 es :" + miObjeto.clave1);
console.log("Mi objeto tiene : " + miObjeto.miMetodo());

Array.prototype.contiene = function (elemento){
    for(let i = 0; i < this.length;i++){
      if(this[i] == elemento){
          return true;
      }
      return false;
    };
}
var array = [1,2,3,4];
console.log("Contiene el elemento : " + array.contiene("hola"));

//Expresiones Regulares
console.log(/texto a validar/.test("si hay texto a validar entoces true"));

//Construccion de array asociativo
let mi_info = { uno:1,dos:2,tres:3};