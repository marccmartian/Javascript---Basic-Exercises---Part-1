//Desarrollar un programa que permita la carga de 5 valores por teclado y nos muestre posteriormente la suma de los valores ingresados y su promedio.

var cant = 1;
var suma = 0;

while(cant <= 5){
    var num = parseInt(prompt("Ingrese número: "));
    suma += num;
    cant++;
}

var prom = suma / (cant - 1);

document.write("La suma es: " + suma + "<br>");
document.write("El promedio es: " + prom);