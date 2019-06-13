//Confeccionar una función que reciba un valor entero comprendido entre 1 y 5. Luego retornar en castellano el valor recibido.

var valor = parseInt(prompt("Numero estre 1 y 5: "));

function convertirAtexto(a){
    switch(a){
        case 1: return "Uno"; break;
        case 2: return "Dos"; break;
        case 3: return "Tres"; break;
        case 4: return "Cuatro"; break;
        case 5: return "Cinco"; break;
        default: return "Error"; break;
    }
}

var texto = convertirAtexto(valor);

document.write("El número es: " + texto);