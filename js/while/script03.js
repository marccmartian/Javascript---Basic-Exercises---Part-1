//Escribir un programa que solicite la carga de un valor positivo y nos muestre desde 1 hasta el valor ingresado de uno en uno.

var num = parseInt(prompt("Igrese número: "));

var cont = 1;
while(cont <= num)
{
    document.write("<div>" + cont + "</div>");
    cont++;
}