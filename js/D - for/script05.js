//Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
//Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

var valor = parseInt(prompt("Ingresa valor del 1 al 10"));

for(var i = 0; i <= 12; i++){
    document.write(valor +"x"+ i +" = "+ (valor * i) + "<br>");
}