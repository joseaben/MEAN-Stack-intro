var variale = 2016;
//variable = 'otra';
var otraVariable = 7;
otraVariable = 14;
var miCumpleanios = { dia: 3, mes: 11, anio: 1978 };
console.log(miCumpleanios.dia);
console.log("Antes de cumplir anios" + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("despues de cumplir anios" + miCumpleanios.anio);
function cumplirAnios(fechaCumpleanios) {
    fechaCumpleanios.anio++;
}
//Definicion de clases
class Persona {
    //Metodo constructor
    constructor(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify() {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}
//Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre ="Ruben";
ruben.apellido1 = "Gomez";
ruben.apellido2 = "Garcia";*/
//Con metodo constructor
let ruben = new Persona("Ruben", "Gomez", "Garcia");
console.log(ruben.stringify());
//Herencia
class Ciudadano extends Persona {
    constructor(nombre, apellido1, apellido2, identidad) {
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    stringify() {
        return super.stringify() + " " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("kane", null, null, "1");
console.log(ciudadanoKane.stringify());
/*var ciudadanoKane = new Ciudadano();
var ciudadanoBill: Persona = new Persona("p","p","p");

ciudadanoKane =  new Persona("p","p","p");
ciudadanoBill = new Ciudadano();*/
//# sourceMappingURL=app.js.map