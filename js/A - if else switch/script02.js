/**
 * Ejemplo: Confeccionar un programa que pida por teclado tres notas de un alumno (0 - 10), calcule el promedio e imprima alguno de estos mensajes:

Si el promedio es >=7 mostrar "Promocionado".
Si el promedio es >=4 y <7 mostrar "Regular".
Si el promedio es <4 mostrar "Reprobado".
 */

var nota1 = parseInt(prompt("Ingrese primera nota: "));
var nota2 = parseInt(prompt("Ingrese segunda nota: "));
var nota3 = parseInt(prompt("Ingrese tercera nota: "));

var prom = (nota1 + nota2 + nota3) / 3;

if(prom >= 7)
{
    document.write("Promedio: " + prom + "; Promocionado");
}
else
{
    if(prom >= 4)
    {
        document.write("Promedio: " + prom + "; Regular");
    }
    else
    {
    document.write("Promedio: " + prom + "; Reprobado");
    }
}