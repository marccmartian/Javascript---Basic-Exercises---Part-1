//Confeccionar un programa que permita cargar un valor comprendido entre 1 y 10. Luego generar un valor aleatorio entre 1 y 10, mostrar un mensaje con el número sorteado e indicar si ganó o perdió:

var num = parseInt(prompt('Ingrese un numero entre 1 y 10'));

var aleatorio = parseInt(Math.random() * 10) + 1;

if(num == aleatorio){
    document.write("El numero que se sorteo es " + aleatorio + " ganaste!");
}else{
    document.write("El numero sorteado es " + aleatorio + " y no coincide con " + num);
}