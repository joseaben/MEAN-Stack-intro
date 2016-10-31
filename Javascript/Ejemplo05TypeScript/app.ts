var variale = 2016;
//variable = 'otra';
var otraVariable :number = 7;
otraVariable = 14;
//otraVariable = '15'; 

//tipos
interface Tiempo {
    dia:number;
    mes:number;
    anio:number;

}

var miCumpleanios:Tiempo = {dia:3,mes:11,anio:1978};
console.log(miCumpleanios.dia);
console.log("Antes de cumplir anios" + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("despues de cumplir anios" + miCumpleanios.anio);
function cumplirAnios(fechaCumpleanios :Tiempo):void{
    fechaCumpleanios.anio++;
}

//Definicion de clases

class Persona {
    //Definicion de atributos
    nombre :string;
    apellido1 :string;
    apellido2 :string;
    //Metodo constructor
    constructor(nombre :string, apellido1 :string, apellido2 :string){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;

    }
    stringify():string{
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}


//Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre ="Ruben";
ruben.apellido1 = "Gomez";
ruben.apellido2 = "Garcia";*/


//Con metodo constructor
let ruben = new Persona("Ruben","Gomez","Garcia");


