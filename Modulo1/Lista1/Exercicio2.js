const prompt = require('prompt-sync')(); 

var eleitores = prompt("Digite a quantidade de eleitores: ");
var brancos = prompt("Digite a quantidade de votos brancos: ");
var nulos = prompt("Digite a quantidade de votos nulos: ");
var validos = prompt("Digite a quantidade de votos validos: ");

if(!isNaN(eleitores) && !isNaN(brancos) && !isNaN(nulos) && !isNaN(validos)){

    var eleitores = parseInt(eleitores)
    var brancos = parseInt(brancos)
    var nulos = parseInt(nulos)
    var validos = parseInt(validos)
    var totalVotos = brancos + nulos + validos
    var abstencao = eleitores - totalVotos

    console.log(validos/eleitores*100 + "% votaram em um candidato.")
    console.log(brancos/eleitores*100 + "% votaram em branco.")
    console.log(nulos/eleitores*100 + "% anularam os votoss.")
    console.log(abstencao/eleitores*100 + "% não votaram.")

} else console.log("Algum dos valores informados não é númerico. Tente novamente!")






