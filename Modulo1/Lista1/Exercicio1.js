/*
Obs: Antes daexecução de exercicio verifique se o terminal aponta para a pasta Modulo1/Lista1.
Caso não, execute primeiramente: "cd Modulo1/Lista1", depois disso será possivel executar o arquivo "node ListaExercicio.js"

Exercício 1:
*/
const readline = require('readline');

const graus = readline.createInterface({
input: process.stdin,
output: process.stdout
});

graus.question('Enter Celcius value: ', (temperature) => {
    const fahrenheit = (temperature * 9/5) + 32;
    console.log(fahrenheit + "° Fahrenheit")
});
