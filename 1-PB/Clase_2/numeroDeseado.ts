import * as rls from 'readline-sync';
let numeroSeleccionado : number = rls.questionInt("Ingrese el numero que desea verificar si es o no mayor a 20");
if (numeroSeleccionado > 20) {
    console.log("Si el numero es mayor o igual a 20: ", numeroSeleccionado);    
} else {
    console.log("Si el numero es menor o igual a 20:", numeroSeleccionado);
}
