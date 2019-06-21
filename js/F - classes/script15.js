/* 
Cargar un String por teclado e implementar las siguientes funciones: 
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.
*/

var texto = prompt("Ingrese texto");

function imprimirMitad(cadena){
    for(var i = 0; i < cadena.length/2 ; i++){
        document.write(cadena[i]);
    }
    document.write("<br>");
}

function imprimirUltimoCaracter(cadena){
    var index = cadena.length - 1;
    document.write(cadena[index] + "<br>");
}

function imprimirFormaInversa(cadena){
    var tam = cadena.length;
    for(var i = tam-1 ; i >= 0; i--){
        document.write(cadena[i])
    }
    document.write("<br>");
}

function imprimirSepararGuion(cadena){
    for(var i = 0; i < cadena.length; i++){
        document.write(cadena[i] + "-");
    }
    document.write("<br>");
}

function ImprimirCantidadVocales(cdn){
    var cont = 0;    
    var cadena = cdn.toUpperCase();
    for(var i = 0; i < cadena.length; i++){
        if(cadena[i] == 'A' || cadena[i] == 'E' || cadena[i] == 'I' || cadena[i] == 'O' || cadena[i] =='U'){
            cont++;
        }
    }
    return cont;
}

document.write("La cadena es: " + texto + "<br><br>");

document.write("La mitad es: ");
imprimirMitad(texto);

document.write("Ultimo caracter: ");
imprimirUltimoCaracter(texto);

document.write("Impreso al revés: ");
imprimirFormaInversa(texto);

document.write("Separado por guiones: ");
imprimirSepararGuion(texto);

var n = ImprimirCantidadVocales(texto)
document.write("Cantidad de vocales: " +  n);