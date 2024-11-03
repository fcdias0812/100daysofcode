// 1
let frutas = ["Maçã", "Banana", "Uva", "Abacaxi", "Melância"];
console.log(frutas);

// 2
let primeiraFruta = frutas[0];
let ultimaFruta = frutas[4];
console.log(primeiraFruta);
console.log(ultimaFruta);

// 3
frutas[1] = "Morango";
console.log(frutas);

// 4
frutas.push("Abacate");
console.log(frutas);

// 5
frutas.shift();
console.log(frutas);

// 6
frutas.forEach(function(fruta) {
    console.log(fruta);
})