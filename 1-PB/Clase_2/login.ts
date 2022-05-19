import * as rls from 'readline-sync';

let usuario : string = rls.question("Por favor ingrese su usuario: ");
let clave : string = rls.question("Por favor ingrese su clave: ", {hideEchoBack : true})

if (usuario == "Juan" && clave == "claveJuan"){

    console.log("Bienvenido");

}else{

    console.log("Usuario o Clave incorrecta");
}