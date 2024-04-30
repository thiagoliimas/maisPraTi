const prompt = require('prompt-sync')(); 

const varList = []
let soma = 0;

for(let i = 0; i < 4; i++){
    varList.push(prompt("Digite o " + (i+1) + "° valor: "));
}

if(varList.every(p => !isNaN(p))){

    varList.forEach(p => soma += parseFloat(p));

    const result1 = (parseFloat(varList[0])+25)
    const result2 = (varList[1]*3)
    const result3 = (varList[2]*12/100)
    const result4 = (soma-(varList[varList.length-1]))
    
    console.log(`${varList[0]} + 25 = ${result1}`)
    console.log(`${varList[1]} x 3 = ${result2}`)
    console.log(`12% de ${varList[2]} é igual a: ${result3}`)
    console.log(`${varList[0]} + ${varList[1]} + ${varList[2]} = ${result4}`)

} else console.log("Algum dos valores informados não é númerico. Tente novamente!")