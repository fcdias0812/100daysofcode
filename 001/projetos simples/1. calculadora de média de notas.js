// Calculadora de Média de Notas: Crie uma função que receba
// um array de notas e calcule a média, mostrando se o aluno está aprovado ou não.

let readlineSync = require("readline-sync");

// Inserir as notas no array
let notas = [];
let nota;

while(true){
    nota = readlineSync.questionInt("Digite a nota [0 para encerrar]: ");
    
    if(nota === 0) break;
    if(nota > 0){
        console.log(`Nota ${nota} adicionada.`);
        notas.push(nota);
    }
}

// Calcular a média das notas
function calcularMedia(){
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma += notas[i];
    }
    return soma / notas.length;
}

// Mostrar se o aluno foi aprovado ou não
const media = calcularMedia();
if(media < 6){
    console.log(`O aluno foi reprovado com média: ${media.toFixed(2)}`);
}else{
    console.log(`O aluno foi aprovado com média: ${media.toFixed(2)}`);
}