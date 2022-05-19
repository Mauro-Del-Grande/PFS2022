import * as rls from 'readline-sync';

let numero : number = rls.questionFloat("Ingrese el numero que sea saber si es par o impar: ");

if (numero==0){
    console.log("Su numero es 0, indica que no es par ni tampoco impar");
} else if ( 0==numero%2 ) {
console.log("El numero que ingreso es par");
} else
    console.log("El numero que ingreso es impar");  