//Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.

var num1 = parseInt(prompt("Primer número:"));
var num2 = parseInt(prompt("Segundo número:"));
var num3 = parseInt(prompt("Tercer número:"));

function ordenarMenorAMayor(a, b, c){
    if(a < b && a < c)
    {
        document.write(a + ", ");
        if(b < c)
        {
            document.write(b + ", " + c);
        }
        else
        {
            document.write(c + ", " + b);
        }
    }
    else
    {
        if(b < c)
        {
            document.write(b + ", ");
            if(a < c)
            {
                document.write(a + ", " + c);
            }
            else
            {
                document.write(c + ", " + a);
            }
        }
        else
        {
            document.write(c + ", ");
            if(a < b)
            {
                document.write(a + ", " + b);
            }
            else
            {
                document.write(b + ", " + a);
            }
        }
    }
}

document.write("La serie es: " + num1 + " | " + num2 + " | " + num3 + "<br>");
document.write("Ordenando: " );
ordenarMenorAMayor(num1, num2, num3)