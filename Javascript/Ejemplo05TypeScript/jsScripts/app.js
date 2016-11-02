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
var otraPersona = new Ciudadano("q", "q", "q", "1");
/*var ciudadanoKane = new Ciudadano();
var ciudadanoBill: Persona = new Persona("p","p","p");

ciudadanoKane =  new Persona("p","p","p");
ciudadanoBill = new Ciudadano();*/
class SerVivo {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivvos += 1;
    }
    stringify() {
        return "Clasificacion" + this.clasificacion;
    }
}
SerVivo.totalDeSeresVivvos = 0;
let pez = new SerVivo("marino");
let pez2 = new SerVivo("marino");
let pez3 = new SerVivo("marino");
let tigre = new SerVivo("terrestre");
let leon = new SerVivo("terrestre");
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivvos);
class Padre {
}
let padre = new Padre();
padre.almecenPublico = 77;
class HijoDePadre extends Padre {
    constructor() {
        super();
        this.alamcenProtegido = 6;
    }
}
class Ser {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    stringify() {
        return "Clasificacion" + this.clasificacion;
    }
}
Ser.totalDeSeres = 0;
class Politico extends Ser {
    constructor() {
        super("cucaracha");
    }
    desplazamiento() {
        return "En coche oficial";
    }
}
let politico = new Politico();
//fat arrow (lambda)
let funcionLambda = (uno, dos) => {
    return uno + dos;
};
const PI = 3.141592654;
var { variable1, variable2 } = { variable1: "valor1", variable2: "valor2" };
console.log(variable1);
console.log(variable2);
dameLosCamposPorConsola("uno", 2, "tres", 4, "cinco");
function dameLosCamposPorConsola(campo1, campo2, ...elRestoDeCampos) {
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    for (let posicion in elRestoDeCampos) {
        console.log(posicion);
    }
    for (let elemento of elRestoDeCampos) {
        console.log(elemento);
    }
}
function invertir(elementos) {
    return;
}
//# sourceMappingURL=app.js.map