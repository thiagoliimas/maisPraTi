const prompt = require('prompt-sync')(); 
let i = 1

let num = prompt(`Digite um número: `)

if(isNaN(num)) console.log("Digite apenas números!")

while(i <= 10) {
    console.log(`${i}º: ${num}`)
    i++
}

