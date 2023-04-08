
function adicionar() {

    let inputar = document.querySelector(".input-list").value;
    let lista = document.getElementById("list").innerHTML;

    lista += "<li>" +inputar+ "</li>" + `<button id="removebtn">Remover</button>` + `<button id="ok">OK</button>`

    document.getElementById("list").innerHTML = lista;
}

/*function remover() {
    let inputar = document.querySelector(".input-list").value;
    let lista = document.getElementById("list").innerHTML;

    lista += ""

}*/

/*if(!input.value)
    {
        alert('Digite algo para inserir em sua lista')
    }*/