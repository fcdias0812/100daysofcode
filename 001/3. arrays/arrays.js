let animais = ["Cachorro", "Gato", "Pássaro"];
console.log(animais); // ["Cachorro", "Gato", "Pássaro"]

let primeiroAnimal = animais[0];
let segundoAnimal = animais[1];
let terceiroAnimal = animais[2];
console.log(primeiroAnimal); // Cachorro
console.log(segundoAnimal); // Gato
console.log(terceiroAnimal); // Pássaro

animais[1] = "Peixe"
console.log(animais); // ["Cachorro", "Peixe", "Pássaro"]

animais.push("Coelho");
console.log(animais); // ["Cachorro", "Peixe", "Pássaro", "Coelho"]

animais.pop();
console.log(animais); // ["Cachorro", "Peixe", "Pássaro"]

animais.shift();
console.log(animais); // ["Peixe", "Pássaro"]

animais.unshift("Leão");
console.log(animais); // ["Leão", "Peixe", "Pássaro"]

let tamanho = animais.length;
console.log(tamanho); // 3

animais.forEach(function(animal) {
    console.log(animal);
})