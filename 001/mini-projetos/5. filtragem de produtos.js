// Filtragem de Produtos: Crie uma lista de produtos com categorias
// (ex.: eletrônicos, vestuário) e preços. Permita que o usuário selecione uma
// categoria ou faixa de preço para filtrar a lista usando métodos como filter e forEach.

let readlineSync = require("readline-sync");

// Criar lista de produtos
let produtos = [
    {nome: "Notebook", categoria: "Eletronicos", preco: 3000},
    {nome: "Camisa", categoria: "Vestuario", preco: 180},
    {nome: "Tênis", categoria: "Vestuario", preco: 750},
    {nome: "Monitor", categoria: "Eletronicos", preco: 1200},
    {nome: "Mouse", categoria: "Eletronicos", preco: 300}
]

// Filtragem de preço
let produtoDesejado = readlineSync.question("Digite a categoria [Eletronicos ou Vestuario]: ");
let precoMaximo = readlineSync.questionInt("Digite o preco maximo [Maximo: 3000]: ");

const produtoFiltrado = produtos.filter(produto => {
    return produto.categoria === produtoDesejado && produto.preco <= precoMaximo;
})

// Exibindo os produtos
produtoFiltrado.forEach(produto => {
    console.log(`Produto: ${produto.nome}, Preço: ${produto.preco}`);
})