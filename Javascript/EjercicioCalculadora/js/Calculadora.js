function Calculadora(){
  this.memoria = 0;

  this.operar = function (operador, valor){
    if(this.memoria == 0){
      this.memoria = valor;
    }else{
       this.memoria = eval(this.memoria + operador + valor);
    }
    return this.memoria;
  };
  this.getMemoria = function (){
    return this.memoria;
  };
  this.setMemoria = function(valor){
    this.memoria = valor;
  }
  this.borrar = function (){
    memoria = 0;
  };
};
