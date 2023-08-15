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

//     //Pegando as tarefas pares com map:
// let tarefasPares = listaTarefasArray.map((tarefa,indice)=>{
//     if(indice % 2 == 0){
//         return tarefa;
//     }
// });
// console.log(tarefasPares);
// //Quebrando linha.
// console.log("\n");

    //Pegando as tarefas pares com map e filtrando o undefined com filter:
    let tarefasPares = listaTarefasArray.map((tarefa,indice)=>{
        if(indice % 2 == 0){
            return tarefa;
        }
    }).filter((tarefa)=>{
        return tarefa != undefined;
    });


    console.log(tarefasPares);
    //Quebrando linha.
    console.log("\n");

});



// let frase = "Eu amo, o meu, lindo PROFESSOR, ele, sempre, tenta, dar o seu melhor!";
// console.log(frase);
// let arrayGerado = frase.split("a");
// console.log(arrayGerado);


// //Exemplo de utilização de filter:
// let numeros = [1,2,3,4,5,6,7,8,9,10];
// let numerosPares = numeros.filter(numero => numero % 2 == 0);
// console.log(numerosPares);

//Exemplo de utilização de reduce:
// let numeros = [1,2,3,4,5,6,7,8,9,10];

// let soma = numeros.reduce((acumulador,numero)=> acumulador + numero);

// console.log(soma);

//Exemplo de utilização de reduce com array de objetos:
let pessoas = [
    {nome:"João",idade:20},
    {nome:"Maria",idade:30},
    {nome:"José",idade:40},
    {nome:"Pedro",idade:50},
    {nome:"Ana",idade:60},
    {nome:"Paulo",idade:70}
];

let somaDasIdades = pessoas.reduce((acumulador,pessoa)=> acumulador + pessoa.idade,0);
console.log(somaDasIdades);