const prompt = require('prompt-sync')(); 

let codigo = parseInt(prompt(`Digite o código da região: `))
let regiao;

if(codigo >= 10 && codigo <= 20){
    regiao = "Centro-Oeste"
} else if(codigo >= 25 && codigo <= 50){
    regiao = "Nordeste"
} else {

    switch(codigo){
        case 1 : regiao = "Sul"
        break
        
        case 2 : regiao = "Norte"
        break
    
        case 3 : regiao = "Leste"
        break
    
        case 4 : regiao = "Oeste"
        break
    
        case 5 :
        case 6 : regiao = "Nordeste"
        break
    
        case 7 :
        case 8 :
        case 9 : regiao = "Sudeste"
        break
        
        default : regiao = "Região não encontrada."
    }
}

console.log(regiao)