// CLASS ARRAY
//Crear un vector para almacenar los cinco sueldos de operarios y luego mostrar el total de gastos en sueldos (cada actividad en una función)

var salaries = new Array(5);

function loadValues(){
    document.write("Los sueldos son: <br>");
    for(var i = 0; i < salaries.length; i++){
        var value = parseInt(prompt("Ingrese sueldo: "));
        salaries[i] = value;
    }
}

function printValues(){
    for(var i = 0; i < salaries.length; i++){
        document.write(salaries[i] + "<br>");
    }
}

function totalSalary(){
    var sum = 0;
    for(var i = 0; i < salaries.length; i++){
        sum += salaries[i];        
    }
    return sum;
}

loadValues(); printValues();
var total = totalSalary();
document.write("El total de sueldos es: " + total);