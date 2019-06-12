//Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar.

var cant = parseInt(prompt("Cantidad de puntos: "));

for(var i = 0; i < cant; i++){
    var x = parseInt(prompt("ingrese X: "));
    var y = parseInt(prompt("ingrese Y: "));

    if(x > 0){
        if(y > 0){
            document.write("("+x+"; "+y+") e IC <br>");
        }else{
            document.write("("+x+"; "+y+") e IIC <br>");
        }
    }else{
        if(y > 0){
            document.write("("+x+"; "+y+") e IVC <br>");
        }else{
            document.write("("+x+"; "+y+") e IIIC <br>");
        }
    }
}