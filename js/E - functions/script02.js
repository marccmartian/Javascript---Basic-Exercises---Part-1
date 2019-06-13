//Elaborar una función a la cual le enviemos tres enteros y muestre el menor.

var num1 = parseInt(prompt("Primer número:"));
var num2 = parseInt(prompt("Segundo número:"));
var num3 = parseInt(prompt("Tercer número:"));

function calcularNumeroMenor(a, b, c){
    if(a < b && a < c){
        document.write("El menor es: " + a + "<br>");
    }else{
        if(b < c){
            document.write("El menor es: " + b + "<br>");
        }else{
            document.write("El menor es: " + c + "<br>");
        }
    }
}

document.write("La serie es: " + num1 + ", " + num2 + ", " + num3 + "<br>");
calcularNumeroMenor(num1, num2, num3)