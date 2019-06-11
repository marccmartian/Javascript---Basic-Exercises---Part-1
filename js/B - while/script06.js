//Realizar un programa que permita cargar dos listas de 4 valores cada una. Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor (mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")

var contA = 1;
var sumA = 0;
var contB = 1;
var sumB = 0;

while(contA <= 4){
    var valor = parseInt(prompt("**LISTA A**; Ingresa número: "));
    sumA += valor;
    contA++
}

while(contB <= 4){
    var valor = parseInt(prompt("==LISTA B==; Ingresa número: "));
    sumB += valor;
    contB++
}

if(sumA == sumB){
    document.write("Sumas iguales");
}else{
    if(sumA > sumB){
        document.write("Lista A mayor");
    }else{
        document.write("Lista B mayor");
    }
}