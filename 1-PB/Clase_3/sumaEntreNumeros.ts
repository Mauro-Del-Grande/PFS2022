import * as rls from 'readline-sync';

let numero1 : number = rls.questionInt("Ingrese el primer numero: ");
let numero2 : number = rls.questionInt("Ingrese el segundo numero: ");
let contador, suma : number;

for(contador = numero1, suma = 0; contador <= numero2; contador ++) {
    suma = suma + contador;
}
    console.log("La suma entre estos numeros es:", suma);
 