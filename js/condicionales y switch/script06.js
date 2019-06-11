/**
 * Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
ESTE EJEMPLO TAMBIEN SE PUEDE HACER CON EL OPERADOR &&
 */

var x = parseFloat(prompt("Ingrese valor de x: "));
var y = parseFloat(prompt("Ingrese valor de y: "));

if(x > 0)
{
   if(y > 0)
   {
      document.write("("+x+"; "+y+") e IC");
   }
   else
   {
      document.write("("+x+"; "+y+") e IIC");
   }     
}
else
{
   if(y < 0)
   {
      document.write("("+x+"; "+y+") e IIIC");
   }
   else
   {
      document.write("("+x+"; "+y+") e IVC");
   }
}
