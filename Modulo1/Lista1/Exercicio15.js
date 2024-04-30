const prompt = require('prompt-sync')(); 
let i = 1
let valorRecebido
let pesoRecebido
let somatorioPeso = 0
let somatorioNotas = 0
let media

let objList = []

while(valorRecebido != 0){

    valorRecebido = parseFloat(prompt(`Digite o ${(i)} ° valor: `))
    
    if(valorRecebido != 0){
        pesoRecebido = parseInt(prompt(`Digite o peso do ${(i)} ° valor: `))

        objList.push({
            valor: valorRecebido,
            peso: pesoRecebido
        })
    }
    i++
} 

for(let obj of objList){
    somatorioNotas += (obj.valor*obj.peso)
    somatorioPeso += obj.peso
}

media = somatorioNotas/somatorioPeso

console.log(`Média ponderada: ${media}`)