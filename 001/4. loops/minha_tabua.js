// 1
for(let i = 1; i <= 10; i++){
    console.log("7 * " + i + " = " + 7*i);
}

// 2
contador = 2;
while(contador <= 20){
    if(contador % 2 == 0){
        console.log(contador);
    }
    contador++;
}

// 3
numero = 1;
do{
    console.log(numero);
    numero++;
}while(numero <= 5);

// 4
cores = ["Preto", "Branco", "Azul", "Roxo", "Rosa"];
for(let x = 0; x < cores.length; x++){
    console.log(cores[x]);
}

// 5
nomes = ["Fabrício", "Clara", "Diogo", "Otávio"];
nomes.forEach(function(nome) {
    if(nome == "Fabrício"){
        console.log("Salve salve Fabrício, dboa?");
    }else if(nome == "Clara"){
        console.log("Oi bb, ta solteira? rsrs");
    }else if(nome == "Diogo"){
        console.log("Opa Diogo, mostra o biceps");
    }else{
        console.log("Boa noite Otávio, como ta a vida selvagem?");
    }
})