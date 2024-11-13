// Crie um array de strings que representem frases. Use find para
// localizar a primeira frase que começa com "A" e termina com "s".
// Caso nenhuma frase seja encontrada, exiba uma mensagem de "Nenhuma frase encontrada".

let array = ["jogo", "tabuleiro", "avioes", "casas", "alugueis"];

let localizar = array.find((string) => {
    if(string.startsWith("a") && string.endsWith("s")){
        return console.log(string);
    }
})

console.log(localizar);