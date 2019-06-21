/*Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
El valor acumulado de todos los elementos del vector.
El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50.*/

var vector = new Array(8);

function loadValues(){    
    for(var i = 0; i < vector.length; i++)
    {
        vector[i] = parseInt(prompt("Elemento " + i + ": "));        
    }   
}

function printVector(){
    document.write("El vector es: <br>");
    for(var i = 0; i < vector.length; i++)
    {
        document.write(vector[i] + " | ");
    }
    document.write("<br><br>");  
}

function sumTotal(){
    var sum = 0;
    for(var i = 0; i < vector.length; i++)
    {
        sum += vector[i];     
    }
    return sum;   
}

function sumMaj36(){
    var sum = 0;
    for(var i = 0; i < vector.length; i++)
    {
        if(vector[i] > 36){
            sum += vector[i];
        } 
    }
    return sum;  
}

function countMaj50(){
    var cont = 0;
    for(var i = 0; i < vector.length; i++)
    {
        if(vector[i] > 50){
            cont++
        } 
    }
    return cont;  
}

loadValues();
printVector();

var myTotal = sumTotal();
document.write("El valor acumulado es: "+ myTotal +"<br>");

var totMaj36 = sumMaj36();
document.write("Las suma de valores mayores a 36 es: "+ totMaj36 +"<br>");

var maj50 = countMaj50();
document.write("La cantidad de valores mayores a 50 es: "+ maj50 +"<br>");