//Desarrollar un programa que permita cargar n números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
var cant = parseInt(prompt("Cantidad de números:"));

var cont = 1;
var par = 0;
var impar = 0;

while(cont <= cant)
{
    var valor = parseInt(prompt("Ingrese número: "));

    if(valor % 2 == 0)
    {
        par++;
    }
    else
    {
        impar++;
    }

    cont++;
}

document.write("Existen "+par+" pares <br>");
document.write("Existen "+impar+" impares");