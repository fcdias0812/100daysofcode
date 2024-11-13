// Sistema de Pontuação de Jogos: Crie um sistema de pontuação para um jogo
// onde cada ação (por exemplo, acerto ou erro) tem um valor associado. Use switch
// para classificar as ações e métodos de array para atualizar e mostrar a pontuação final.

let acoes = ["acertou", "acertou", "errou", "acertou", "errou", "errou", "combo", "combo", "errou", "errou"];
let pontuacao = 0;

acoes.forEach((acao) => {
    switch(acao){
        case "acertou":
            pontuacao += 10;
            break;
        case "errou":
            pontuacao -= 5;
            break;
        case "combo":
            pontuacao += 15;
            break;
    }
})

console.log(`O jogador teve a pontuação final de: ${pontuacao} pontos!`);