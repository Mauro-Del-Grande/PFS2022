import * as rls from 'readline-sync';

let numero : number = rls.questionFloat("Ingrese un numero: ");

while (numero == 0) {
    numero = rls.questionInt("Ingrese un numero que no sea 0: ");
} if (0==numero%2) {
    console.log("El numero elegido es par");
} else
    console.log("El numero elegido es impar");