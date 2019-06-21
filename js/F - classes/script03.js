//Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.

var fecha = new Date();

function encontrarCuatrimestre(){
    //var m = fec.getMonth();
    fecha.setMonth(10);          //yo mismo le asigno el mes para comprobar
    m = fecha.getMonth();
    if(m < 4){
        document.write("Estoy en el Primer Cuatrimestre");
    }else{
        if(m < 8){
            document.write("Estoy en el Segundo Cuatrimestre")
        }
        else{
            document.write("Estoy en el Tercer Cuatrimestre")
        }
    }
}

encontrarCuatrimestre();