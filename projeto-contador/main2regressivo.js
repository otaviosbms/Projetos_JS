
var dias = document.getElementById("dias");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
 



function iniciarcontador(dia,hor,min){

    min = min - 1

    seg = 60

    var contador = setInterval(() =>{
        
        seg = seg - 1
        
        if (seg == 0){
            min = min - 1
            seg = 60
            seg = seg - 1
        }if(min == 0){
            const a = min = 0
        }

        segundos.innerHTML = seg;
        minutos.innerHTML = min;
    }, 100);


    


    
}    


iniciarcontador(0,0,2)
