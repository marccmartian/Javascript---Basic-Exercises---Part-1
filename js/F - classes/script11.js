//Cargar un string por teclado y luego llamar a los distintos métodos de la clase String y la propiedad length.

var cadena = prompt('Ingresa cualquier texto: ');

document.write('El texto es: ' + cadena + '<br>');
document.write('Cantidad de caracteres: ' + cadena.length + '<br>');
document.write('El primer caracter es: ' + cadena.charAt(0) + '<br>');
document.write('Los primeros tres caracteres: ' + cadena.substring(0, 3) + '<br>');

if(cadena.indexOf('hola') == -1){
    document.write('No se ingresó la subcadena \"hola\" <br>');
}else{
    document.write('Se ingresó la cadena hola <br>');
}

document.write('En mayúsculas: ' + cadena.toUpperCase() + '<br>');
document.write('En minúsculas: ' + cadena.toLowerCase() + '<br>');