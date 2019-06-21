//Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la posición, de lo contrario una leyenda que indique que no está.

var frase = prompt("Ingresa la frase: ");
var clave = prompt("Texto a buscar: ");

var pos = frase.indexOf(clave);

if(pos != -1){
    document.write("La posicion es: " + pos);
}else{
    document.write("la palabra no esta en la frase");
}