
var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
 


function iniciarcontador(){

    seg = 0
    min = 0
    hor = 0
    dia = 0

    var contador = setInterval(() =>{
        
        seg = seg + 1

        segundos.innerHTML = seg;

        if(seg == 59){
            min = min + 1
            seg = 0 + 1
            minutos.innerHTML = min;

        }if(min == 59){
            hor = hor + 1
            min = 0 + 1
            horas.innerHTML = hor;
            
        }if(hor == 24){
            dia = dia + 1
            hor = 0 + 1
            dias.innerHTML = dia;
        }

    }, 1000);

    
}    



