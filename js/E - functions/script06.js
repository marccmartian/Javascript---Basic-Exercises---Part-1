//Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

function pedirValoresYsumar(){
    var suma = 0;
    for(var i = 0; i < 5; i++){
        var valor = parseInt(prompt("Ingrese valor "+ i));
        suma += valor;
    }
    return suma;
}

var mySum = pedirValoresYsumar();
document.write("La suma de los valores es: " + mySum);