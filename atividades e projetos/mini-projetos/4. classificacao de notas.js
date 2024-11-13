// Classificação de Notas: Receba uma lista de notas e classifique-as em
// “Aprovado”, “Recuperação” e “Reprovado” usando loops e switch. Exiba a
// quantidade de alunos em cada categoria.

let readlineSync = require("readline-sync");

// Ler a lista do usuário
let notas = [];

while(true){
    let nota = readlineSync.questionInt("Digite uma nota [0 para encerrar]: ");
    if(nota === 0) break;
    notas.push(nota);
}

// Classificar as notas
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

notas.forEach((nota) => {
    if(nota >= 7){
        aprovados++;
    }else if(nota >= 6){
        recuperacao++;
    }else{
        reprovados++;
    }
})

// Exibir a quantidade de alunos em cada categoria
console.log(`Aprovados: ${aprovados} - Reprovados: ${reprovados} - Recuperação: ${recuperacao}`);