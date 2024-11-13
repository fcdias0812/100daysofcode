// function convidados(...nomes){
//     console.log("Seja bem vindo todos os convidados.");
//     console.log(nomes);
// }

// convidados("Fabrício", "Diogo", "Otávio");

function sorteador(...numeros){
    console.log(numeros);
    
    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);