//Ingresar una palabra o frase por teclado y determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)

var frase = prompt('Ingresar un texto');
var cant = 0;

var texto = frase.replace(/ /g, "");     //le quito los espacios en blanco

for(var i = 0; i < texto.length; i++)
{
    if(texto.charAt(i) == texto.charAt(texto.length-1-i))
    {
        cant++;
    }
}

if(cant == texto.length){
    document.write(frase.toUpperCase() + " - Se lee igual de atras hacia delante, palabra palíndroma");
}else{
    document.write(frase.toUpperCase() + " - NO es una palabra palindroma");
}
