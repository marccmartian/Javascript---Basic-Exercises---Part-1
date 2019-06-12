/*Realizar un programa que lea los lados de n triángulos, e informar:
a)	De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b)	Cantidad de triángulos de cada tipo.
c)	Tipo de triángulo del que hay menor cantidad.*/

var cant = parseInt(prompt("Cantidad de triangulos: "));
var nroEq = 0;
var nroIso = 0;
var nroEsc = 0;

for(var i = 1; i <= cant; i++){
    var a = parseInt(prompt("Lado 1"));
    var b = parseInt(prompt("Lado 2"));
    var c = parseInt(prompt("Lado 3"));

    document.write("TRIANGULO "+ i +"<br>");
    document.write("a: "+ a +" | b:"+ b + " | c: "+ c +"<br>");
    if(a == b && b == c && a == c)
    {
        document.write("Equilatero<br><br>");
        nroEq++;
    }
    else
    {
        if(a == b || a == c || b == c)
        {
            document.write("Isosceles<br><br>");
            nroIso++;
        }
        else
        {
            document.write("Escaleno<br><br>");
            nroEsc++;
        }
    }
}

document.write("Triángulos equilateros: " + nroEq + "<br>");
document.write("Triángulos isosceles: " + nroIso + "<br>");
document.write("Triángulos escalenos: " + nroEsc + "<br>");

if(nroEq < nroEsc && nroEq < nroIso){
    document.write("Hay menos triangulos equilateros <br>");
}else{
    if(nroEsc < nroIso){
        document.write("Hay menos triangulos escalenos <br>");
    }
    else{
        document.write("Hay menos triangulos isosceles <br>");
    }
}