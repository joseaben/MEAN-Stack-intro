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
var Persona = (function () {
    //Metodo constructor
    function Persona(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    Persona.prototype.stringify = function () {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    };
    return Persona;
}());
//Sin metodo constructor
/*let ruben = new Persona();
ruben.nombre ="Ruben";
ruben.apellido1 = "Gomez";
ruben.apellido2 = "Garcia";*/
//Con metodo constructor
var ruben = new Persona("Ruben", "Gomez", "Garcia");
//# sourceMappingURL=app.js.map