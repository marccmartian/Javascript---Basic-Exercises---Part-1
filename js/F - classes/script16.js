//Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.

var texto = prompt("Ingrese texto");

/*
//haciendolo con replace()
var nuevo = texto.replace(/ /g, "<br>");

document.write("El texto es: <br>" + nuevo);
*/

//Puedo hacero de esta otra forma:
//Ojo que dentro del for; texto[i] me devuelve lo mismo que texto.charAt(i)
for(var i = 0; i < texto.length; i++){
    if(texto.charAt(i) == " "){
        document.write("<br>");
    }else{
        document.write(texto.charAt(i));
    }
}

