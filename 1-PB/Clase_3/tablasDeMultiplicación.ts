import * as rls from 'readline-sync';

let numero : number = rls.questionInt("Ingrese el numero que desea multiplicar: ");
let hastaNumero: number = rls.questionInt("Se multiplicara hasta el numero: ");
let multiplicador : number;
multiplicador = 1;

for (multiplicador; multiplicador <= hastaNumero; multiplicador ++) {
    console.log(numero, "*", multiplicador, "=", numero*multiplicador);
}