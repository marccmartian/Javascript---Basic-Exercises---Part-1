//Mostrar en una página la fecha y la hora actual.

var fecha = new Date();

var dayWeek = fecha.getDay();
var day = fecha.getDate();
var month = fecha.getMonth();
var year = fecha.getFullYear();
var hours = fecha.getHours();
var minutes = fecha.getMinutes();

document.write("La fecha de hoy es: "+ dayWeek +", "+ day + " de " + month + " del " + year + "<br>");
document.write("La hora es: " + hours + "h:" + minutes + "m<br>");

//puedo mejorar el codigo haciendo que el dia y el mes me los muestre como texto