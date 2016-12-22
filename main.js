var resta = document.getElementById("resta");
var pSalida = document.getElementById("salida");

function calcular() {
    var n = resta.value;


    if (n == "" ) {
        
       
    } else {
        
     if (n<21) {
            pSalida.innerHTML = 21-parseInt(n);
        } 
        
        else if (n>21) {
            pSalida.innerHTML = (parseInt(n)-21)*2 ;
        }
        
        else {
            pSalida.innerHTML = "";
        }
    }
}