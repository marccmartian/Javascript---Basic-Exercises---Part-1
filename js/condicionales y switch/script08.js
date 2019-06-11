/**
 * Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'.
 */

var num1 = parseInt(prompt("Primer número"));
var num2 = parseInt(prompt("Segundo número"));
var num3 = parseInt(prompt("Tercer número"));

if(num1 < 10 || num2 < 10 || num3 < 10){
    document.write("Alguno de los numeros es menor a 10");
}else{
    document.write("Todos los numeros son mayores a 10");
}
