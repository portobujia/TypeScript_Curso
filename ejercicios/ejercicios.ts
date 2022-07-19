/*
Este código está hecho en JavaScript y hay que pasarlo a TypeScript empleando variables “let” y constantes.
var nombre;
nombre = "Miguelo";
var edad;
edad = 30;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};*/

let nombre: string;
nombre = "Miguelo";
let edad: number;
edad = 30;
let PERSONAJE = {
    nombre: nombre,
    edad: edad
};

/*
Crear una interface en TypeScript a partir de este código JavaScript:
var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
*/

interface superHero {
    nombre: string;
    poderes: string[];
}

/*
Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
DiagonalVertical y DiagonalHorizontal.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
Y también debe de tener un método que calcule el area, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
Este método devolverá un número.
*/

class Rombo {
    diagonalVertical: number;
    diagonalHorizontal: number;

    calcularArea(): number {
        return this.diagonalVertical * this.diagonalHorizontal;
    }
    constructor(diagonalVertical: number,
        diagonalHorizontal: number) {
    }
}

/*Cambiar función a tipo flecha
function suma( a, b ){
  return (a + b) 
}
*/

let funcionSuma = (a: number, b: number) => (a + b);


/*
"use strict";
// Uso de Let y Const
var nombre = "Nestor Kauil";
var edad = 25;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
*/

let nombre2: string = "Nestor Kauil";
var edad2: number = 25;
var PERSONAJE2: { nombre: string, edad: number } = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);

/*
// Cree una interfaz que sirva para validar el siguiente objeto
let batman:LigaJusticia = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);
*/
interface LigaJusticia {
    nombre: string;
    artesMarciales: string[];
}