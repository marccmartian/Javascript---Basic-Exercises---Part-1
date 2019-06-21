//Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
//El usuario ingresa el tamaño del vector.

var v1 = new Array();
var v2 = new Array();
var sum = new Array();
var tam = parseInt(prompt("Tamaño del vector: ")); 

function loadValues(){    
    for(var i = 0; i < tam; i++ ){
        v1[i] = parseInt(prompt("Vector uno [" + i + "] = "));        
    }
    for(var i = 0; i < tam; i++ ){        
        v2[i] = parseInt(prompt("Vector dos [" + i + "] = "));
    }
}

function printVector(vector){
    for(var i = 0; i < vector.length; i++){
        document.write(vector[i] + " ");
    }
    document.write("<br><br>");
}

function sumElements(){      
    for(var i = 0; i < tam; i++){
        sum[i] = v1[i] + v2[i];        
    }    
    return sum;
}

loadValues();

document.write("Primer vector: <br>");
printVector(v1); 

document.write("Segundo vector: <br>");
printVector(v2);

document.write("Vector Suma: <br>");
var vectorSuma = sumElements();
printVector(vectorSuma);
