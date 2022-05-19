import * as rls from 'readline-sync';

let precioInicial : number = 450.50;
let descuento : number = (precioInicial*0.1);
let precioFinal : number = (precioInicial - descuento);
console.log("El precio del producto con el descuento aplicado es: ", precioFinal);
