/**
 * Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.
 */

var num = parseInt(prompt("Ingrese un número entero: "));

if(num == 0)
{
    document.write("El número es igual a cero");
}
else
{
    if(num > 0)
        document.write("El número es Positivo");
    else
        document.write("EL número es negativo");
}