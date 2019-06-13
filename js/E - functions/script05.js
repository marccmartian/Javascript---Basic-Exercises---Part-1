//Confeccionar una función que reciba una fecha con el formato de día, mes y año y retorne un string con un formato similar a: "Hoy es 12 de junio de 2019".

var dia = prompt("Ingrese día ");
var mes = prompt("Ingrese mes ");
var anio = prompt("Ingrese año ");

function convertirFechaAtexto(dd, mm, aaaa){
    var fecha = "Hoy es " + dd + " de " + mm + " del " + aaaa;
    return fecha;
}

var texto = convertirFechaAtexto(dia, mes, anio);
document.write(texto);