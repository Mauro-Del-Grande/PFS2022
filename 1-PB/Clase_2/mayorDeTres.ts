import * as rls from 'readline-sync';
let numero1 : number = rls.questionInt("Ingrese el primer numero: ");
let numero2 : number = rls.questionInt("Ingrese el segundo numero: ");
let numero3 : number = rls.questionInt("Ingrese el tercer numero: ");
if (numero1>numero2&&numero1>numero3) {
    console.log("El numero mas grande es el: ", numero1)
}
    else if (numero2>numero1&&numero2>numero3){
        console.log("El numero mas grande es el: ", numero2);
    }
        else
            console.log("El numero mas grande es el: ", numero3);