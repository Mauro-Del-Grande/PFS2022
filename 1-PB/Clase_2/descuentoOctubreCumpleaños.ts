import * as rls from 'readline-sync';

let precioUnitario : number = rls.questionFloat("Ingrese el valor del producto: ");
let cantidad : number = rls.questionInt("Ingrese la cantidad de productos: ");
let mes : string = rls.question ("Ingrese el mes en el que hizo la compra: ");

let precioTotal : number = (precioUnitario*cantidad);

if (mes == "octubre") {
    var descuentoAniversario = precioTotal * 0.15;
        console.log("Se efectuará un descuento del 15% por aniversario.");
        console.log("Su compra con descuento es de: ", precioTotal - descuentoAniversario);
}   else if (mes != "octubre") {
        console.log("Su compra es de: ", precioTotal);
}
