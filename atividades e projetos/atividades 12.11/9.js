// Escreva uma função contarPalavras que recebe uma frase e retorna um
// objeto com a contagem de cada palavra na frase. Por exemplo, "olá mundo olá"
// deve retornar { olá: 2, mundo: 1 }. Use split, reduce e includes para ajudar na solução.

function contarPalavras(frase){
    return frase.toLowerCase().split(" ").reduce((acumulador, palavra) => {
        acumulador[palavra] = (acumulador[palavra] || 0) + 1;
        return acumulador;
    }, {});
}

console.log(contarPalavras("olá mundo olá eu eu sou o fabricio fabricio"))