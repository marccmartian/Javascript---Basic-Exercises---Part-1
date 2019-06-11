/** 
 * De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
a)	Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b)	Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c)	Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
ESTE EJEMPLO TAMBIEN SE PUEDE HACER CON EL OPERADOR &&
 */

var sueldo = parseFloat(prompt("Sueldo: "));
var anios = parseInt(prompt("Años de antigüedad: "));

if(sueldo >= 500)
{
    document.write("El sueldo es: " + sueldo);
}
else
{
    if(anios >= 10)
    {
        document.write("Se le aumenta el 20% <br>");
        document.write("El sueldo es: " + ((sueldo * 0.2) + sueldo));
    }        
    else
    {
        document.write("Se le aumenta el 5% <br>");
        document.write("El sueldo es: " + ((sueldo * 0.05) + sueldo));
    }        
}