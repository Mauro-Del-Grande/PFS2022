import * as rls from 'readline-sync'

let nombreDeUsuario : string = rls.question("Ingrese el nombre de usuario: ");
let contraseña : string = rls.question("Ingrese su clave: ");

if(nombreDeUsuario == "Juani" && contraseña == "juanic12"){
    console.log("Clave correcta");
} else{
    console.log("Usuario o clave incorrecta");
}