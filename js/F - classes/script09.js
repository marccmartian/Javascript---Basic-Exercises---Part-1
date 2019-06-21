//Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia.

var num = parseInt(prompt("Ingrese un numero: "));

var alCubo = Math.pow(num, 3);

document.write(num + " es al cubo es: " + alCubo);