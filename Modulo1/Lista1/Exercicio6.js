const prompt = require('prompt-sync')(); 

const varList = []

for(let i = 0; i < 3; i++) varList.push(prompt(`Digite o ${(i+1)} ° valor: `))

for(let nota of varList) {
    if(isNaN(nota)) {
        console.log("Digite apenas números!")
        break
    }
}

let A = parseFloat(varList[0])
let B = parseFloat(varList[1])
let C = parseFloat(varList[2])

if((A < B + C) && (B < A + C) && (C < A + B)){
    if((A==B && B==C)) {
        console.log("Triângulo eqüilátero: possui todos os lados iguais")
    } else if((A == B || A == C || B == C)){
        console.log("Triângulo isósceles: possui dois lados iguais")
    } else if((A != B && B != C)) {
        console.log("Triângulo escaleno: possui todos os lados diferentes")
    }
} else console.log("Não é um triângulo")