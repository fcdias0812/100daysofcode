// 1
let idade = 17;

if(idade >= 16){
    console.log("Você é de maior, pode votar.");
}else{
    console.log("Você é de menor, não pode votar.");
}

// 2
let velocidade = 39;

if(velocidade < 40){
    console.log("Muito devagar.");
}else if(velocidade < 80){
    console.log("Velocidade normal.");
}else{
    console.log("Muito rápido.");
}

// 3
let mes = 12;

switch(mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Número digitado está fora de 1 a 12.");
        break;
}

// 4
let numero = 2;
if(numero % 2 == 0){
    console.log("Número par.");
}else{
    console.log("Número ímpar.");
}

// 5
let codigo = "fr";

switch(codigo){
    case "en":
        console.log("Hello my friend! How are you?");
        break;
    case "es":
        console.log("¡Hola mi amigo! ¿Cómo estás?");
        break;
    case "fr":
        console.log("Bonjour mon ami! Comment vas-tu?");
        break;
    default:
        console.log("Digite um código válido!");
        break;
}