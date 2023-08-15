//criar uma lista de tarefas vazias
let listaTarefasArray =[];

//recuperando o botão de add tarefas
const botaoAddTarefa = document.getEelementById("btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    evt.preventDeFault();

    //recuperandoo input de tarefas
    const inputTarefa = document.getElementById("idTarefa");

    //inserindo a tarefa digitada no array
    listaTarefasArray.push(inputTarefa.value);

    //criando elementos li (lista)
    let li = document.createElement("li");

    //Add o item digitado no elemento criado
    li.textContent = tarefa;

    //recuperando a lista UL
    const listaTarefaUL = document.getElementById("lista-tarefas");

    //inserindo o elemento li criando em cativeiro
    listaTarefasUL.appendChild(li);

    //criando um botão  para excluir tarefas
    botaoExcluir.textContent = " x ";

    //add texto ao botao de exclusão de tarefas
    let botaoExcluir = document.createElement("button");

    //add o botão de excluir tarefas ao elemento li
    li.appendChild(botaoExcluir);

    //add um listener de evento para o botão excluir
    botaoExcluir.addEventListener("click" , (evt)=>{

        let conteudoDeTextoDoLiArray = evt.target.parentNode.textContent.split(" ");
        let indice = listaTarefasArray.indexOf(conteudoDeTExtiDoLIArray[0]);

        listaTarefasArray.forEach(tarefa=>{

            if(conteudoDeTExtiDoLIArray[0] == tarefa){
                listaTarefasArray.splice(indice,1);
            }
        });
        evt.target.parentNode.remove();
    });
    inputTarefa.value = ""
    console.log(listaTarefasArray);
});