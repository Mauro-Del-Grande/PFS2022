import * as rls from 'readline-sync';
let alturaPersona : number = rls.questionFloat("Ingresar altura de la persona");
if(alturaPersona > 1.30) {
    console.log("Si la persona mide más de 1.30: Si, puede ingresar", alturaPersona);
} else(alturaPersona < 1.30)
    console.log("Si la persona mide menos de 1.30: No, no puede ingresar", alturaPersona);
    