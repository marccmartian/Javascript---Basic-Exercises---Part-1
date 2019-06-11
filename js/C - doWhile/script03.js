/*
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.
*/
var cont = 0;
var suma = 0;

do
{
    var account = parseInt(prompt("Nro de cuenta (negativo para salir):"));
    var name = prompt("Nombre:");
    var balance = parseInt(prompt("Saldo:"));
    
    cont++
    document.write("**CLIENTE " + cont + "**<br>");
    document.write("Cuenta: " + account + "<br>");
    document.write("Nombre: " + name + "<br>");
    document.write("Saldo: "+balance + "<br>");

    if(balance == 0){
        document.write("Estado de cuenta: NULO <br><br>");
    }else{
        if(balance > 0){
            document.write("Estado de cuenta: ACREEDOR <br><br>");
        }else{
            document.write("Estado de cuenta: DEUDOR <br><br>");
        }
    }

    suma += balance;
}
while(account >= 0)

document.write("Total saldos de acreedores: " + suma + "<br>");