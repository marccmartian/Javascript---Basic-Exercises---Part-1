//Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0.

do{
    var num = parseInt(prompt("Número entre 0 y 900 (Cero para salir):"));    
    if(num >= 1000){
        document.write("El Nro. "+num+", Tiene mas de 3 dígitos <br>");
    }else{
        if(num < 10){
            document.write("El Nro. "+num+", Tiene 1 dígito <br>");
        }else{
            if(num < 100){
                document.write("El Nro. "+num+", Tiene 2 dígitos <br>");
            }else{
                document.write("El Nro. "+num+", Tiene 3 dígitos <br>");
            }
        }
    }
} while(num != 0)