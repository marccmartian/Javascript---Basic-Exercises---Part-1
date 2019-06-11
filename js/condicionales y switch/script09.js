/**
 * Ingresar un numero del 1 al 7 e indicar que dia de la semana es
 */

var num = parseInt(prompt("Ingresa un número de día"));

switch(num)
{
case 1: 
    document.write("Domingo"); 
    break;
case 2: 
    document.write("Lunes"); 
    break;
case 3: 
    document.write("Martes"); 
    break;
case 4: 
    document.write("Miercoles"); 
    break;
case 5: 
    document.write("Jueves"); 
    break;
case 6: 
    document.write("Viernes"); 
    break;
case 7: 
    document.write("Sabado"); 
    break;
default: 
    document.write("El número es incorrecto"); 
    break;
}