/**
 * ingresar por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno, dos dígitos o más.
 */

var num = parseInt(prompt("Ingresa número del 1 al 99"));

if(num < 10)
{
    document.write("El número tiene un dígito");
}
else
{
    if(num < 100)
    {
        document.write("El número tiene dos dígitos");
    }
    else
    {
        document.write("El número tiene más de dos dígitos");
    }
}
