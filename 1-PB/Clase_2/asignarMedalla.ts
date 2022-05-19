import * as rls from 'readline-sync';
let posicionLlegada : number = rls.questionInt("Ingresar posicion de llegada: ");
switch (posicionLlegada) {
    case 1:
        console.log("Entregar medalla de oro");
        break;
    case 2:
        console.log("Entregar medalla de plata");
        break;
    case 3:
        console.log("Entregar medalla de bronce");
        break;

    default:
        console.log("Entregar mencion de participación");
}