//definição de entradas
let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("ul");
let item = document.getElementsByTagName("li");

//função para retornar a quantidade de caracteres que o úsuario digitar
function inputLength(){
    return input.value.length;
}

//função de criação de tarefas
function createListElement(){
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

//função que muda cor quando a tarefa forr concluida
    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossOut);

    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

//função que deleta tarefa
    function deleteListItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//condição que não possibilita a criação de tarefa caso nao tenha nenhum carctere
function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

//condição que possibilita usar o enter do teclado para adicionar uma tarefa
function addListAfterKeypress(){
    if(inputLength() > 0 && event.which === 13){
        createListElement();
    }
}