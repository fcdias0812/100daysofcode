// 1
function calculoArea(c, l){
    return c * l;
}

let area = calculoArea(30, 7);
console.log("Área: " + area + " metros.");

// 2
function parOuImpar(x){
    if(x % 2 == 0){
        return "Par.";
    }else{
        return "Ímpar.";
    }
}

// 3
let numero = parOuImpar(1);
console.log(numero);

// 3
let soma = function(y, z){
    return y + z;
}

console.log(soma(15, 10));

// 4
let saudacao = (nome) => {
    console.log("Olá, " + nome + "!");
}

saudacao("Clara");

// 5
function converterCelsiusParaFahrenheit(numero){
    return (numero * (9/5)) + 32;
}

let celcius = 2;
console.log(celcius + "ºC em Fahrenheit é: " + converterCelsiusParaFahrenheit(celcius) + "ºF.");