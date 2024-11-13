// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 6];
// console.log(numeros);

// let pessoa = {
//     nome: "Fabrício",
//     idade: 45,
//     cargo: "Programador"
// }

// let novaPessoa = {
//     ...pessoa,
//     status: "ATIVO",
//     cidade: "Indaiatuba / SP"
// }

// console.log(novaPessoa);

function novoUsuario(info){
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2024",
        codigo: "123123"
    }
    console.log(data);
}

novoUsuario({ nome: "José", sobrenome: "Silva", cargo: "programador" });