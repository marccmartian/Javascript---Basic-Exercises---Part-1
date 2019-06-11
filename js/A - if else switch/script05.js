/**
 * De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior:	Porcentaje>=90%.
Nivel medio:	Porcentaje>=75% y <90%.
Nivel regular:	Porcentaje>=50% y <75%.
Fuera de nivel:	Porcentaje<50%.
ESTE EJEMPLO TAMBIEN SE PUEDE HACER CON EL OPERADOR &&
 */

var nombre = prompt("Nombre del postulante: ");S
var numPreg = parseInt(prompt("Número de preguntas: "));
var correctas = parseInt(prompt("Respuestas correctas: "));

var porcentaje = (correctas/numPreg) * 100;

if(porcentaje >= 90)
{
    document.write(porcentaje + "% Nivel Superior");
}
else
{
    if(porcentaje >= 75)
    {
        document.write(porcentaje + "% Nivel Medio");
    }
    else
    {
        if(porcentaje >= 50)
        {
            document.write(porcentaje + "% Nivel Regular");
        }
        else
        {
            document.write(porcentaje + "% Fuera de Nivel");
        }
    }
}
