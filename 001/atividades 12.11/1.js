// 1. Crie uma função chamada saudar que recebe um nome 
// como parâmetro e retorna uma saudação personalizada,
// como "Olá, [nome]!".

// 2. Teste a função com diferentes nomes e armazene os resultados
// em variáveis.

// 1
function saudar(nome){
    console.log(`Olá, ${nome}!`);
}

saudar("Fabrício");

// 2
let saudacoes = function saudar(nome){
    console.log(`Olá, ${nome}!`);
}

console.log(saudacoes("Fabrício"));