// Criar data de hoje
let data = new Date();
console.log(data);

// Desmembrar uma data
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());

console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getDay());
console.log(data.getFullYear());

// Criar uma data específica
let datanova = new Date("March 10, 2018");
console.log(datanova);

// Transformando uma data em milisegundos
console.log(Date.parse(datanova));

// Criando data a partir dos milisegundos
console.log(new Date(1520650800000));

// Formatar uma data
console.log(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`);

// Contas com datas
datanova.setDate(datanova.getDate() + 5);
datanova.setHours(datanova.getHours() + 10);
console.log(datanova);

// Qual é o dia da semana?
let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log(dias[datanova.getDay()]);