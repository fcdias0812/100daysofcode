// Loop for
for(let i = 1; i <= 10; i++){
    console.log("Número: " + i);
}

// Loop while
let contador = 1;
while(contador <= 10){
    console.log("Contagem: " + contador);
    contador++;
}

// Loop do...while
let numero  = 1;
do{
    console.log("Número: " + numero);
    numero++;
}while(numero <= 10);

// Iterando sobre um array com for
let animais = ["Cachorro", "Gato", "Pássaro"];
for(let i = 0; i < animais.length; i++){
    console.log(animais[i]);
}

// Iterando sobre um array com forEach
animais.forEach(function(animal) {
    console.log(animal);
})