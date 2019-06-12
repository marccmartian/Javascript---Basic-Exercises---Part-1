/* Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
a)	De cada triángulo la medida de su base, su altura y su superficie.
b)	La cantidad de triángulos cuya superficie es mayor a 12. */

var cont = 0;

for(var i = 1; i <= 3; i++)
{
    var b = parseInt(prompt("Ingrese la base"));
    var h = parseInt(prompt("Ingrese la altura"));

    var sup = b * h;

    document.write("TRIANGULO " + i + "<br>");
    document.write("Base: " + b + "<br>");
    document.write("Altura: " + h + "<br>");
    document.write("Superficie: " + sup + "<br><br>");

    if(sup > 12){
        cont++;
    }    
}

document.write("Triangulos con superfice mayor a doce: " + cont);