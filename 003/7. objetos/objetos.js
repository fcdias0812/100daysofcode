// Criando um objeto
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
}

console.log(carro);

// Acessando propriedades de um objeto
console.log(carro.marca);
console.log(carro["modelo"]);

// Modificando propriedades de um objeto
carro.ano = 2021;
carro["modelo"] = "Camry";

console.log(carro);

// Adicionando e removendo propriedades de um objeto
carro.cor = "Prata";
console.log(carro);

delete carro.ano;
console.log(carro);

// Métodos em objetos
let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function(){
        console.log("Olá, meu nome é " + this.nome);
    }
}

pessoa.saudacao();

// Iterando sobre propriedades de um objeto
for(let chave in carro){
    console.log(chave + ": " + carro[chave]);
}