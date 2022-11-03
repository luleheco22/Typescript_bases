(()=>{


// Crear interfaces

 interface Auto {
   encender:boolean;
   velocidadMaxima:number;
   acelerar():void;
 }


// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villian {
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean
}

const guason: Villian = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villian ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface City {
  (ciudadanos:string[]):number
}

const ciudadGotica:City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

  interface Person {
    name:string;
    age:number;
    sex:string;
    estadoCivil:string
    printBio():void

  }

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
 public name:string='';
 public age:number=0;
 public sex:string='';
 public estadoCivil:string=''
  
  printBio(){
    console.log(`${this.name} ${this.age} ${this.sex} ${this.estadoCivil}`)
  }

}


})()