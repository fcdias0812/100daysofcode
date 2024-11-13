// Crie uma função chamada contagemRegressiva que recebe um número
// como argumento e faz uma contagem regressiva no console,
// imprimindo cada número a cada segundo. Use setTimeout para
// criar a pausa entre os números. Ao chegar a 0,
// exiba uma mensagem "Tempo esgotado!".

function contagemRegressiva(numero){
    function contar(n){
        if(n < 0){
            console.log("Tempo esgotado!");
            return;
        }

        console.log(n);

        setTimeout(() => {
            contar(n - 1);
        }, 1000);
    }

    contar(numero);
}

contagemRegressiva(10);