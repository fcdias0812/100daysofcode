// Organizador de Tarefas: Construa um sistema básico de lista de tarefas,
// onde uma função pode adicionar, remover e listar tarefas armazenadas em um array.

let readlineSync = require("readline-sync");

// Menu de opções
let tarefas = [];
let tarefa;
let opcaoMenu;

while(opcaoMenu != 0){
    console.log("[1] Adicionar tarefa");
    console.log("[2] Remover tarefa");
    console.log("[3] Listar tarefas");
    console.log("[0] Sair");

    opcaoMenu = readlineSync.questionInt("Digite sua opcao: ");

    switch(opcaoMenu){
        case 1:
            adicionarTarefa();
            console.clear();
            console.log("Tarefa adicionada.");
            break;
        case 2:
            removerTarefa();
            console.clear();
            console.log("Tarefa removida.");
            break;
        case 3:
            console.clear();
            listarTarefas();
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}

// Adicionar na lista
function adicionarTarefa(){
    tarefa = readlineSync.question("Tarefa: ");
    tarefas.push(tarefa);
}

// Remover na lista
function removerTarefa(){
    if(tarefas.length === 0){
        console.log("Não há tarefas para remover.");
        return;
    }

    let opcaoRemover = readlineSync.questionInt("Remover primeira ou ultima tarefa [0 = primeira // 1 = ultima]: ");

    if(opcaoRemover == 0){
        tarefas.shift();
    }else if(opcaoRemover == 1){
        tarefas.pop();
    }else{
        console.log("Opção inválida! Digite 0 ou 1.");
    }
}

// Listar tarefas
function listarTarefas(){
    if(tarefas.length === 0){
        console.log("Nenhuma tarefa na lista.");
    }else{
        console.log("Tarefas:");
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        })
    }
}