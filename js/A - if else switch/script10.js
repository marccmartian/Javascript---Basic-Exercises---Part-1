/**
 * Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.
 */

var word = prompt("Igresa la palabra casa, mesa, perro o gato");

switch(word)
{
case "casa": 
    document.write("House");
    break;
case "mesa":
    document.write("Table");
    break;
case "perro":
    document.write("Dog");
    break;
case "gato":
    document.write("Cat");
    break;
default:
    document.write("Palabra incorrecta");
    break;
}