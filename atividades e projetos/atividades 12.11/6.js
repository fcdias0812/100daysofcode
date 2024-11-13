// Crie um array de objetos chamado produtos, onde cada objeto representa
// um produto com nome, preço e categoria. Em seguida, use map para criar
// um novo array contendo apenas o nome de cada produto e filter para listar
// os produtos com preço acima de 50.

const produtos = [
    {
        nome: "televisao",
        preco: 1000,
        categoria: "eletronicos"
    },
    {
        nome: "camisa",
        preco: 150,
        categoria: "vestimenta"
    },
    {
        nome: "meia",
        preco: 25,
        categoria: "vestimenta"
    },
    {
        nome: "mouse",
        preco: 49,
        categoria: "eletronicos"
    },
    {
        nome: "teclado",
        preco: 200,
        categoria: "eletronicos"
    }
]

let precoMaiorQue50 = produtos.filter((produto) => {
    return produto.preco >= 50;
})

let nomesProduto = precoMaiorQue50.map((produto) => {
    console.log(`O produto "${produto.nome}" está custando: R$${produto.preco}`);
})