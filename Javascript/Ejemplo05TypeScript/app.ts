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
console.log(ruben.stringify());


//Herencia
class Ciudadano extends Persona {

    identidad: string;

    constructor(nombre: string,apellido1: string,apellido2: string,identidad: string){
        super(nombre,apellido1,apellido2);
        this.identidad = identidad;
    }
    stringify(): string {
        return super.stringify() + " " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("kane",null,null,"1");
console.log(ciudadanoKane.stringify());
var otraPersona: Persona = new Ciudadano("q","q","q","1");
/*var ciudadanoKane = new Ciudadano();
var ciudadanoBill: Persona = new Persona("p","p","p");

ciudadanoKane =  new Persona("p","p","p");
ciudadanoBill = new Ciudadano();*/

class SerVivo {
    static totalDeSeresVivvos: number = 0;
    clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivvos += 1;
    }
    stringify(): string{
        return "Clasificacion" + this.clasificacion;
    }

}

let pez: SerVivo = new SerVivo("marino");
let pez2: SerVivo = new SerVivo("marino");
let pez3: SerVivo = new SerVivo("marino");
let tigre: SerVivo = new SerVivo("terrestre");
let leon: SerVivo = new SerVivo("terrestre");

console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivvos);



class Padre {
    public almecenPublico: number;
    protected alamcenProtegido: number;
    private almacenPrivado: number;
}

let padre = new Padre();
padre.almecenPublico = 77;

class HijoDePadre extends Padre {
    constructor(){
        super();
        this.alamcenProtegido = 6;
    }
}

abstract class Ser {
    static totalDeSeres: number = 0;
    protected clasificacion: string;
    constructor(clasificacion: string){
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    stringify(): string{
        return "Clasificacion" + this.clasificacion;
    }
    abstract desplazamiento(): string;

}
class Politico extends Ser {
    constructor(){
        super("cucaracha");
    }
    desplazamiento(): string {
        return "En coche oficial";

    }
}
let politico: Ser = new Politico();



//fat arrow (lambda)
let funcionLambda =  (uno: number,dos: number) =>{
    return uno + dos;
}

const PI = 3.141592654;

var {variable1,variable2} = {variable1:"valor1",variable2:"valor2"};
console.log(variable1);
console.log(variable2);

dameLosCamposPorConsola("uno",2,"tres",4,"cinco");
function dameLosCamposPorConsola(campo1: string,campo2: number, ...elRestoDeCampos){
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    for(let posicion in elRestoDeCampos){
        console.log(posicion);
    }
    for(let elemento of elRestoDeCampos){
        console.log(elemento);
    }
}
function invertir<T>(elementos: T[]): T[]{
    return ;
}