//Escribir un programa que solicite la carga de números por teclado, obtener su promedio. Finalizar la carga de valores cuando se cargue el valor 0.
var suma = 0;
var cant = 0;

do{
    var num = parseInt(prompt("Ingrese numero (Cero para salir):"));
    suma += num;
    cant++;
}while(num != 0)

var prom = suma / (cant - 1)
document.write("El promedio es: "+ prom);