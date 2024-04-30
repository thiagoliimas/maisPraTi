const prompt = require('prompt-sync')(); 

const varList = []
let soma = 0
let media = 0

for(let i = 0; i < 2; i++) varList.push(prompt(`Digite a ${(i+1)} ° nota: `));

for(let nota of varList) {
    if(isNaN(nota)) {
        console.log("Digite apenas números!")
        break
    }
    
    if(nota < 0 || nota > 10) {
        console.log("Digite uma nota entre 0 e 1!") 
        break
    }

    soma += parseFloat(nota)
}

media = soma/varList.length

if(media>=6) {
    console.log("PARABÉNS! Você foi aprovado")
} else console.log("Você foi REPROVADO! Estude mais")