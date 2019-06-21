//Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.
// sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.

var nom;
var cont = 0;

do {
    nom = prompt("Ingrese nombre, escriba 'fin' para terminar ");
    nom = nom.toUpperCase();
    cont++;
} while (nom != 'FIN')

document.write("Se ingresaron " + (cont - 1) + " nombres");