const prompt = require('prompt-sync')(); 
let i = 1

let num = prompt(`Digite um número: `)

while(i <= 10) {
    console.log(`${i}º: ${num}`)
    i++
}

