// Crie uma string com a data de hoje
let data = "20/07/2019";
console.log(`Data completa: ${data}`);

// Separe a data em variáveis dia, mês e ano
let dia = data.slice(0, 2);
let mes = data.slice(3, 5);
let ano = data.slice(6, 10);

console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);