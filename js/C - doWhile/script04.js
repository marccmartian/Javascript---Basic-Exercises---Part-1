/*
Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino')
Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:
 
a)	Cantidad total de personas censadas.
b)	Cantidad de varones.
c)	Cantidad de mujeres.
d)	Cantidad de varones cuya edad varía entre 16 y 65 años.
*/
var cont = 0;
var nroVarones = 0;
var nroMujeres = 0;
var edad16y65 = 0;

do
{
    var dni = parseInt(prompt("Número de documento: "));
    var edad = parseInt(prompt("Edad: "));
    var sexo = prompt("Sexo: ");

    switch(sexo){
        case "m": 
            nroVarones++;
            if(edad >= 16 && edad <= 65){
                edad16y65++;
            } 
            break;
        case "f": nroMujeres++; break;
        default: "No se definio sexo"; break;
    }

    cont++;
}
while(dni != 0)

document.write("Cantidad de personas censadas: " + (cont-1) + "<br>");
document.write("Cantidad de varones: " + nroVarones + "<br>");
document.write("Cantidad de mujeres: " + nroMujeres + "<br>");
document.write("Cantidad de varones entre 16 y 65 años: " + edad16y65 + "<br>");