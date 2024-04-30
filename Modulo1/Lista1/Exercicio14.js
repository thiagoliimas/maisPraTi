const prompt = require('prompt-sync')(); 
let soma = 0
let i = 0
let mensagem

do{
    n = prompt(`Digite o ${(i+1)} ° valor: `)
    if(isNaN(n)) {
        mensagem = "Digite apenas números!"
        break
    }else {
        soma += parseInt(n)
        i++
        mensagem = "Média dos valores informados: " + (soma/(i-1))
    }
} while (n != 0)
console.log(mensagem)