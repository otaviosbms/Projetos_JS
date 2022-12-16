function adicionar(){
    
    let text = document.getElementById("texto").value;
    let numb = document.getElementById("numero").value;
    let list = document.getElementById("lista").innerHTML;

    let cont = document.getElementById("contador").innerHTML;

    


    list += "<li id=contador>" +text+numb+"<button>Modificar</button><button onclick=remover()>Apagar</button></li>"
    document.getElementById("lista").innerHTML = list;

}


function remover(){
    var removelist = document.querySelector("#"+ contador)

    removelist.remove();
}