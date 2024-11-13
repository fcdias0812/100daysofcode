// Crie um array de objetos chamado pessoas, onde cada objeto
// contém nome e dataDeNascimento. Use map para adicionar uma
// nova propriedade idade em cada objeto, calculada com base
// na data atual. Em seguida, filtre as pessoas com idade acima de 18 anos.

const pessoas = [
    { nome: "Fabrício", dataDeNascimento: new Date("2003-12-08") },
    { nome: "Clara", dataDeNascimento: new Date("2006-06-01") },
    { nome: "Diogo", dataDeNascimento: new Date("1995-11-30") },
    { nome: "Otávio", dataDeNascimento: new Date("2010-08-22") },
]

function calcularIdade(dataDeNascimento){
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataDeNascimento.getFullYear();
    const mes = hoje.getMonth() - dataDeNascimento.getMonth();
    if(mes < 0 || (mes === 0 && hoje.getDate() < dataDeNascimento.getDate())){
        idade--;
    }
    return idade;
}

const pessoasComIdade = pessoas.map(pessoa => ({
    ...pessoa,
    idade: calcularIdade(pessoa.dataDeNascimento)
})).filter(pessoa => pessoa.idade >= 18);

console.log(pessoasComIdade);