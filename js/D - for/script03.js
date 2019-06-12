//Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.
var suma = 0;

for(var i = 0; i < 10; i++){
    var num = parseInt(prompt("Ingrese número: "));

    if(i >= 5){
        suma += num;
    }

    document.write(num + "<br>");
}

document.write("<br>La suma de los 5 ultimos valores es: " + suma);