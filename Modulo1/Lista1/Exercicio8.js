const prompt = require('prompt-sync')(); 

let a = prompt(`Digite o 1° valor: `)
let b = prompt(`Digite o 2° valor: `)

if(a<b){
    console.log(a)
    console.log(b)
} else {
    console.log(b)
    console.log(a)
}