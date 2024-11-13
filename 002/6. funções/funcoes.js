// Declarando e chamando funções
// function saudacao(){
//     console.log("Olá, mundo!");
// }

// saudacao();

// Funções com parâmetros
// function saudacao(nome){
//     console.log("Olá, " + nome + "!");
// }

// saudacao("Maria");
// saudacao("João")

// Funções com retorno
function multiplicacao(a, b){
    return a * b;
}

let resultado = multiplicacao(5, 7);
console.log(resultado);

// Funções anônimas
// let saudacao = function(nome){
//     console.log("Olá, " + nome + "!");
// }

// saudacao("Ana");

// Arrow functions
let saudacao = (nome) => {
    console.log("Olá, " + nome + "!");
}

saudacao("Carlos");