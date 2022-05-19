import * as rls from 'readline-sync';

let clave : string;
let contador, intento : number;
contador = 0;
intento = 1;

console.log("Ingrese la clave, usted tiene 3 intentos disponibles.");

while (contador < 3) {
   clave = rls.question("Ingrese la clave por favor: ");
   if (clave == "eureka") {
      break; 
} 
   else (clave != "eureka"); {
      contador = contador + 1;
      intento = intento + 1;
         console.log("Clave incorrecta, intentelo denuevo.");
   }

   if (contador == 3) {
      console.log("Clave incorrecta, se acabaron los intentos.");
   }
}