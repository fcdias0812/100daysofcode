// Crie um array de números. Use reduce para calcular a soma total desses números.
// Após calcular a soma, verifique se o total é maior que 100. Se for,
// exiba "Total é maior que 100" no console; caso contrário, exiba "Total é 100 ou menos".

const numeros = [1, 5, 12, 30, 40];

let soma = numeros.reduce((total, atual) => {
    return total += atual;
})

if(soma > 100){
    console.log("O total é maior que 100.");
}else{
    console.log("O total é 100 ou menos.");
}