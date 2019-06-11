/**
 * Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.
 */

var num1 = parseInt(prompt("Ingrese primer número: "));
var num2 = parseInt(prompt("Ingrese segundo número: "));
var num3 = parseInt(prompt("Ingrese tercer número: "));

if(num1 > num2 && num1 > num3)
{
    document.write("El número mayor es: " + num1);
}
else
{
    if(num2 > num3)
    {
        document.write("El número mayor es: " + num2);
    }
    else
    {
        document.write("El número mayor es: " + num3);
    }
}