function Calculadora(){
  this.memoria = 0;
  this.almacenValor = 0;
};
Calculadora.prototype.operar = function (operador, valor){
  if(this.memoria == 0){
    this.memoria = valor;
  }else{
    //TODO: hacerlo sin eval
     this.memoria = eval(this.memoria + operador + valor);
  }
  return this.memoria;
};
Calculadora.prototype.getMemoria = function (){
  return this.memoria;
};
Calculadora.prototype.setMemoria = function(valor){
  this.memoria = valor;
}
Calculadora.prototype.borrar = function (pantalla){
  this.memoria = 0;
  pantalla.value = 0;
};
Calculadora.prototype.setAlmacenValor = function (valor){
  this.almacenValor = valor;
};
Calculadora.prototype.getAlmacenValor = function (){
   return this.almacenValor;
};
