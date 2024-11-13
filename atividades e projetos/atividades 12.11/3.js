// Crie um array com nomes de frutas. Em seguida,
// use filter para criar um novo array contendo apenas
// as frutas que começam com a letra "M". Utilize startsWith
// para fazer a verificação.

let frutas = ["Maçã", "Banana", "Abacate", "Pera", "Melância"];
let frutasComM = [];

frutas.filter((fruta) => {
    if(fruta.startsWith("M")){
        frutasComM.push(fruta);
    }
});

console.log(frutasComM);