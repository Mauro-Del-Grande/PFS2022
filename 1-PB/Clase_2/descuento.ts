import * as rls from 'readline-sync';
let precioProducto : number = rls.questionFloat("Ingrese el valor del producto");
if(precioProducto > 1000) {
    console.log("Si la compra es < 1000 :", precioProducto * 0.9);
} else {
    console.log("Si la compra es > 1000", precioProducto);
}