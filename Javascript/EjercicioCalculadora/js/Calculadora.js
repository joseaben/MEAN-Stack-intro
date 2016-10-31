function Calculadora(){
  this.memoria = 0;
  this.almacenValor = 0;
};
Calculadora.prototype.operar = function (operador, valor){
  if(this.memoria == 0){
    this.memoria = valor;
  }else{
    switch (operador) {
      case '+':
        this.memoria = Number(this.memoria) + Number(valor);
        break;
      case '-':
        this.memoria = Number(this.memoria) - Number(valor);
        break;
      case '*':
        this.memoria = Number(this.memoria) * Number(valor);
        break;
      case '\/':
        this.memoria = Number(this.memoria) / Number(valor);
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
Calculadora.prototype.borrar = function (){
  this.memoria = 0;
};
Calculadora.prototype.setAlmacenValor = function (valor){
  this.almacenValor = valor;
};
Calculadora.prototype.getAlmacenValor = function (){
   return this.almacenValor;
};
