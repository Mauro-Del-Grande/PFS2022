import * as rls from 'readline-sync';

let llegadaColectivo : string;
    console.log("Esperando el colectivo");

llegadaColectivo = rls.question("Llego el colectivo?");

if (llegadaColectivo == "Si") {
        console.log("Llego el colectivo");
} else (llegadaColectivo == "No"); {
        console.log("Siga esperando");
}
