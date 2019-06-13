//Confeccionar una función que reciba dos números y muestre en la página los valores comprendidos entre ellos de uno en uno. Cargar por teclado esos dos valores.

var num1 = parseInt(prompt("Ingrese primer número"));
var num2 = parseInt(prompt("Ingrese segundo número"));

function calcularValores(a, b){
    for(var i = a; i <= b; i++){
        document.write(i + "<br>");
    }
}

calcularValores(num1, num2);