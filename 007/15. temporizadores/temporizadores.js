// setInterval - setTimeout

// setInterval -> Executar de tempos em tempos infinitamente
// Para finalizar ele, podemos colocar o setInterval numa variável e dar clearInterval(variavel)
function acao(){
    console.log("Executando...")
}

// console.log(setInterval(() => {
//     console.log("Executando...");
// }, 1000));

// setTimeout -> Executa a ação depois de um tempo determinado
console.log(setTimeout(() => {
    console.log("Executei!");
}, 3000));