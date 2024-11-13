// Crie um objeto usuario com as propriedades nome, idade e cidade.
// Em seguida, desconstrua o objeto para extrair as propriedades em variáveis
// separadas. Depois, crie um novo objeto usuarioAtualizado que possui todas
// as propriedades de usuario, mas com uma propriedade extra chamada status
// definida como "ativo", usando o spread operator.

const usuario = {
    nome: "Fabrício",
    idade: 20,
    cidade: "Indaiatuba"
};

const { nome, idade, cidade } = usuario;

const usuarioAtualizado = {
    ...usuario,
    status: "ativo"
};

console.log(`O usuário ${nome} está ${usuarioAtualizado.status}`);