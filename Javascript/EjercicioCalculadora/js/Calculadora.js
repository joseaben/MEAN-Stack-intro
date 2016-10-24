function Calculadora(){
  this.memoria = 0;
  this.almacenValor = 0;

  function sumar(valor1,valor2){
    return Number(valor1) + Number(valor2);
  }
  function restar(valor1,valor2){
    return Number(valor1) - Number(valor2);
  }
  function multiplicar(valor1,valor2){
    return Number(valor1) * Number(valor2);
  }
  function dividir(valor1,valor2){
    return Number(valor1) / Number(valor2);
  }
};
Calculadora.prototype.operar = function (operador, valor){
  if(this.memoria == 0){
    this.memoria = valor;
  }else{
    //TODO: hacerlo sin eval
    // this.memoria = eval(this.memoria + operador + valor);
    switch (operador) {
      case '+':
        this.memoria = this.sumar(this.memoria,valor);
        break;
      case '-':
        this.memoria = this.restar(this.memoria,valor);
        break;
      case '*':
        this.memoria = this.multiplicar(this.memoria,valor);
        break;
      case '\/':
        this.memoria = this.dividir(this.memoria,valor);
        break;
    }
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
