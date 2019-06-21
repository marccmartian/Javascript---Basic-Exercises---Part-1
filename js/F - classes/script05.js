//Crear un vector con elementos de tipo string. Almacenar los meses del año. En una función solicitar el ingreso de un número entre 1 y 12. Mostrar a qué mes corresponde y cuántos días tiene dicho mes.

var months = new Array();
months[0] = "";
months[1] = "Enero";
months[2] = "Febrero";
months[3] = "Marzo";
months[4] = "Abril";
months[5] = "Mayo";
months[6] = "Junio";
months[7] = "Julio";
months[8] = "Agosto";
months[9] = "Setiembre";
months[10] = "Octubre";
months[11] = "Noviembre";
months[12] = "Diciembre";

var days = new Array();
days[0] = "";
days[1] = 31;
days[2] = 28;
days[3] = 31;
days[4] = 30;
days[5] = 31;
days[6] = 31;
days[7] = 30;
days[8] = 31;
days[9] = 30;
days[10] = 31;
days[11] = 30;
days[12] = 31;

function printDate(mes, dia){
    num = parseInt(prompt("Ingrese número de mes: "));
    document.write("El mes es " + mes[num] + " y tiene " + dia[num] +" días");
}

printDate(months, days);