// Usando if
let idade = 20;

if(idade >= 18){
    console.log("Você é maior de idade.");
}

// Usando if...else
idade = 15;

if(idade >= 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}

// Usando if...else if...else
let nota = 75;

if(nota >= 90){
    console.log("Nota A");
}else if(nota >= 80){
    console.log("Nota B");
}else if(nota >= 70){
    console.log("Nota C");
}else if(nota >= 60){
    console.log("Nota D");
}else{
    console.log("Nota F");
}

// Usando switch
let dia = "quarta";

switch(dia){
    case "segunda":
        console.log("Hoje é segunda-feira");
        break;
    case "terça":
        console.log("Hoje é terça-feira");
        break;
    case "quarta":
        console.log("Hoje é quarta-feira");
        break;
    case "quinta":
        console.log("Hoje é quinta-feira");
        break;
    case "sexta":
        console.log("Hoje é sexta-feira");
        break;
    default:
        console.log("Hoje é fim de semana");
}