pedra = document.getElementById("pedra");
papel = document.getElementById("papel");
tesoura = document.getElementById("tesoura");


function jogar(){
    if(pedra.checked == false && papel.checked == false && tesoura.checked == false){
        alert("Selecione uma opção de jogada");
    } else{
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
                document.getElementById("pc").src="pc-pedra.png"
                break;
            case 1:
                document.getElementById("pc").src="pc-papel.png"
                break;
            case 2:
                 document.getElementById("pc").src="pc-tesoura.png"
                 break;
        }

        if ((pedra.checked && sorteio == 0)||(papel.checked && sorteio == 1)||(tesoura.checked && sorteio == 2) ) {
            document.getElementById("placar").innerHTML="Empate.";
        } else if ((pedra.checked && sorteio == 2)||(papel.checked && sorteio == 0)||(tesoura.checked && sorteio == 1)){
                document.getElementById("placar").innerHTML="Você Venceu.";
        } else{
            document.getElementById("placar").innerHTML="Você Perdeu.";
        }
    }
}

function resetar(){
    document.getElementById("pc").src="vazio.png";
    document.getElementById("placar").innerHTML="";
}


var escuro = document.getElementById('btnescuro');
var claro = document.getElementById('btnclaro');
var body = document.querySelector('body');

escuro.onclick = function(){
 body.className = "modoescuro";
}

claro.onclick = function(){
 body.className = "";
}