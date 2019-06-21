//Modifico el ejemplo anterior

var fecha = new Date();

var dayWeek = fecha.getDay();
var day = fecha.getDate();
var month = fecha.getMonth();
var year = fecha.getFullYear();
var hours = fecha.getHours();
var minutes = fecha.getMinutes();

function convertirDia(d){
    var texto = "";
    switch (d){
        case 1: texto = "Lunes"; break;
        case 2: texto = "Martes"; break;
        case 3: texto = "Miercoles"; break;
        case 4: texto = "Jueves"; break;
        case 5: texto = "Viernes"; break;
        case 6: texto = "Sabado"; break;
        case 7: texto = "Domingo"; break;
        default: "Error"; break;
    }
    return texto;
}

function convertirMes(m){
    var texto = "";
    switch(m){
        case 0: texto = "Enero"; break;
        case 1: texto = "Febrero"; break;
        case 2: texto = "Marzo"; break;
        case 3: texto = "Abril"; break;
        case 4: texto = "Mayo"; break;
        case 5: texto = "Junio"; break;
        case 6: texto = "Julio"; break;
        case 7: texto = "Agosto"; break;
        case 8: texto = "Setiembre"; break;
        case 9: texto = "Octubre"; break;
        case 10: texto = "Noviembre"; break;
        case 11: texto = "Diciembre"; break;
        default: "Error"; break;
    }
    return texto;
}

var myDay = convertirDia(dayWeek);
var myMonth = convertirMes(month); 

document.write("La fecha de hoy es: "+ myDay +", "+ day + " de " + myMonth + " del " + year + "<br>");
document.write("La hora es: " + hours + "h:" + minutes + "m<br>");