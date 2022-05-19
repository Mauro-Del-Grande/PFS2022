import * as rls from 'readline-sync';

let vueltaNro1 : number = rls.questionFloat("Ingrese el tiempo de la primera vuelta");
let vueltaNro2 : number = rls.questionFloat("Ingrese el tiempo de la segunda vuelta");
let vueltaNro3 : number = rls.questionFloat("Ingrese el tiempo de la tercera vuelta");
let vueltaNro4 : number = rls.questionFloat("Ingrese el tiempo de la cuarta vuelta");

let tiempoTotal : number = vueltaNro1 + vueltaNro2 + vueltaNro3 + vueltaNro4;
console.log("Tiempo total: ", tiempoTotal);
console.log("Tiempo promedio: ", tiempoTotal/4);