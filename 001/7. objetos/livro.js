// 1
let livro = {
    titulo: "Ao farol",
    autor: "Virginia Woolf",
    ano: "1927"
}

// 2
livro.descricao = function(){
    console.log("O(A) criador(a) de " + this.titulo + " é " + this.autor);
}
livro.descricao();

// 3
livro.ano = 1930;

console.log(livro.ano);

// 4
livro.genero = "Ficção";
delete livro.ano;

console.log(livro);

// 5
for(let chave in livro){
    console.log(chave + ": " + livro[chave]);
}