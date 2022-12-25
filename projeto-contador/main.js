

var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

function iniciarcontador(min_init){
    minutos.innerHTML = ((min_init - 1) > 9 ) ? ("" + ( min_init - 1)) : ("0" + min_init - 1);
    segundos.innerHTML = "59";



    var m = min_init - 1;
    var s = 59;


    var contador = setInterval(function(){

        minutos.innerHTML = (m > 9 ) ? ("" + m ) : ("0" + m);
        segundos.innerHTML = (s > 9 ) ? ("" + s ) : ("0" + s);

        if(s > 0){
            s -= 1;
        }else if(s == 0 && m > 0){
            s = 59;
            m -= 1;
        }else{
            m = min_init;
        }
    }, 1000);


}

iniciarcontador(15)