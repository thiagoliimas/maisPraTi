const prompt = require('prompt-sync')(); 
let n
let i = 0

do{
    n = prompt(`Digite a ${(i+1)} ° nota: `)
    for(let i = 1; i <= n; i++) console.log(`${i} x ${n} = ` + (i*n))
    i++
} while (i < 5)