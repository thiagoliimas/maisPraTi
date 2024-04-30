const prompt = require('prompt-sync')(); 
const currencyFormatter = require('currency-formatter');

let qnt = prompt(`Digite a quantidade de maçãs compradas: `)

let valor = 0.3

if(isNaN(qnt)) console.log("Digite apenas números!")
else if(qnt<1) console.log("Nenhuma maçã foi comprada.")
else {
    qnt = parseFloat(qnt)


    if(qnt>=12) valor = 0.25

    console.log("Valor da compra: " + currencyFormatter.format(qnt*valor, { locale: 'pt-BR' }))
}