// Crie uma função chamada media que recebe uma quantidade indefinida
// de números usando o rest operator e retorna a média desses números.
// Teste a função com diferentes conjuntos de números.

let i = 0;

function media(...numeros){
    numeros.forEach((numero) => {
        i += numero;
    });

    console.log(Number.parseInt(i / numeros.length)); 
}

media(5, 7, 8, 8, 5, 10, 10);