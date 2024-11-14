//  A lista produtos deve conter os seguintes produtos:
// Computador, Telefone, Mouse, Teclado. Exiba essa lista no
// terminal.

let lista = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(lista);

// Mostrar quantos produtos tem na lista
console.log(`A lista tem ${lista.length} produtos.`);

// Retirar o mouse e retornar o restante
lista.splice(2, 1);
console.log("Mouse removido. Agora restam:");
console.log(lista);

// Faça uma busca na sua lista por algum produto, por exemplo procure por
// Computador e caso exista esse produto na sua lista exiba um console falando
// que este produto existe e mostre tambem o nome deste produto caso não exista
// mostre uma mensagem avisão que o produto não foi encontrado.
let buscarProduto = lista.find((produto) => produto == "Computador");
if(buscarProduto === undefined){
    console.log("O produto não foi encontrado.");
}else{
    console.log(`Foi encontrado: ${buscarProduto}.`)
}

// Remover o segundo item da lista
lista.splice(2, 1);
console.log("Segundo item removido. Agora restam:")
console.log(lista);