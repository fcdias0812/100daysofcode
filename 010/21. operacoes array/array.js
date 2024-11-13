// map -> Percorrer um array
let lista = ["Fabrício", "Diogo", "Otávio"];

lista.map((item, index) => {
    console.log(`Posição ${index}: ${item}`);
})



// reduce -> Reduzir um array
let numeros = [5, 3, 2, 5];
let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} -> Total até o momento.`);
    console.log(`${numero} -> Valor atual.`);
    // console.log(`${indice} -> Posição atual.`);
    // console.log(`${original} -> Array original`);
    console.log("--------------------");

    return acumulador += numero;
})

console.log(total);



// find -> Buscar algo no array
let listagem = [5, 3, "José", 2, "Fabrício", "José"];
let busca = listagem.find((item) => {
    if(item === "José"){
        return console.log("Item encontrado com sucesso");
    }else{
        return console.log("Item não encontrado");
    }
})

console.log(busca);



// filter -> Filtrar algo dentro do array
let palavras = ["Fabrício", "Diogo", "Otávio", "Lorena", "Pedro", "Bruno"];
let resultado = palavras.filter((item) => {
    return item.length <= 5;
})

console.log(resultado);