// Criando strings
// let saudacao = "Olá, mundo!";
// let nome = 'João';
// let mensagem = `Bem-vindo, ${nome}`;

// console.log(saudacao);
// console.log(nome);
// console.log(mensagem);

// Usando métodos de strings
let texto = "JavaScript é incrível!";

console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.indexOf("incrível"));
console.log(texto.slice(0, 10));
console.log(texto.replace("incrível", "fantástico"));
console.log(texto.split(" "));

// Concatenando strings
let saudacao = "Olá";
let nome = "João";
let mensagem = saudacao + ", " + nome + "!";

// Escapando caracteres
let frase = "Ele disse: \"JavaScript é incrível!\"";
console.log(frase);

// Comparando strings
let a = "JavaScript";
let b = "JavaScript";
let c = "Javascript";

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);