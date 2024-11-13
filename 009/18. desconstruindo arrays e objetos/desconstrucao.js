let pessoa = {
    nome: "Fabrício",
    sobrenome: "Dias",
    empresa: "Fatec Indaiatuba",
    cargo: "Programador Mobile",
}

// let nome = "teste";

// const { nome: nomePessoa, cargo, empresa, sobrenome } = pessoa;

// console.log(nomePessoa);
// console.log(cargo);
// console.log(empresa);
// console.log(sobrenome);

let nomes = ["Fabrício", "Diogo", "Otávio"];

let { 0:fabricio, 2:otavio } = nomes;

// console.log(fabricio);
// console.log(otavio);

let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(segundoNome);