// const endereco = {
//     rua: "Av Dom Lino",
//     cidade: "Russas",
//     estado: "CE",
// };


// const pessoa = {
//     nome: "Thiago",
//     idade: 32,
//     email: "thiagoliimas@outlook.com",
//     Endereco: endereco
// };

/*pessoa.saudar = function() {
    return `Olá. Prazer, meu nome é ${this.nome}.`
}

const garrafaCafe = {
    cor: "Preto",
    volume: "500 ml",
}

garrafaCafe.encher = function(cafe){
    return `Garrafa foi cheia com ${cafe}`;
}
*/
// for(let chave in pessoa){
//     console.log(chave + " : " + pessoa[chave])
// }


// let listaCarros = [
// { 
//     modelo: "Uno",
//     marca: "Fiat",
//     ano: 2015
// },
// {
//     modelo: "Compass",
//     marca: "Jeep",
//     ano: 2022
// }
// ]

// for (const chave in listaCarros) {
//     console.log(listaCarros[chave]); 
// }

// for(const carro of listaCarros){
//     console.log(carro.modelo)
// }

// console.log()
// console.log("##########################")
// console.log()

// listaCarros.forEach(carro => console.log(carro))
// listaCarros.forEach(carro => console.log(carro.modelo))

// let cores = ["Azul", "vermelho", "amarelo"]

// cores.forEach(cor => console.log(cores.indexOf(cor) + " : " + cor))

// let numeros = [1,2,45,7,9]

// let soma = 0;
// numeros.forEach(p => {
//     console.log(p + " x 2 = " + p*2)
//     soma += p
// })

// console.log("Soma = " + soma)

//objeto for in
//array for of


// const professor = {
//     nome: "Tony Stark",
//     materia: "Matématica",
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// }

// let soma = 0;
// let i = 0;

// for(let aluno in professor.notas){
//     soma += professor.notas[aluno]
//     i++
// }

// console.log("Media = " + (soma).toPrecision(3))
// soma > 3 ? console.log("Aprovado") : console.log("Reprovado")

// const biblioteca = [
//     {titulo: "12 Regras para a vida", autor: "Jordan Peterson", ano: 1925},
//     {titulo: "O Hobbit",autor: "J R R Tolkien",ano: 1937},
//     {titulo: "Senhor do Jogo",autor: "Sidney Sheldon", ano: 1999},
//     {titulo: "Zé Carioca",autor: "Disney",ano: 1940},
//     {titulo: "Nação Dopamina",autor: "Ana Lembke",ano: 2021}
// ]
// for(let livro of biblioteca) livro.ano < 2000 ? console.log(livro.titulo + " - " +  livro.ano) : null

// const filmes = [
//     {titulo: "Tropa de Elite", genero: "Ação"},
//     {titulo: "Capitão Fantástico", genero: "Drama"},
//     {titulo: "O Poderoso Chefão", genero: "Crime"},
//     {titulo: "Clube da Luta", genero: "Drama"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "High School Musical", genero: "Musical"},
//     {titulo: "Barbie", genero: "Comédia"},
// ]

// const contagem = {}

// filmes.forEach(p => {
//     if(contagem[p.genero]){
//         contagem[p.genero]++
//     } else contagem[p.genero]
// })

// for(genero in contagem){
//     console.log(genero + " : " + contagem[genero])
//}

// let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let novaLista = []
// let meioLista = 0;
// let n = 15

//****************************************************************************************** */
// function buscaBinaria(num, list){
//     meioLista = (lista.length/2).toFixed(1)
//     while(num =! lista[meioLista]){
//         if(num > lista[meioLista]){
//             novaLista = lista.slice(meioLista, lista.length-1)
//         } else {
//             novaLista = lista.slice(0, meioLista)
//     }
// }
// return lista[meioLista]
   
// }

// console.log(buscaBinaria(15, lista))
//****************************************************************************************** */

//****************************************************************************************** */
// const pessoa = {
//     nome: "Thiago",
//     sobrenome: "Lima",
//     idade: 32
// }

// const endereco = {
//     rua: "Conego Agostinho",
//     numero: 1971
// }

// const pessoaCompleto = {
//     ...pessoa,
//     endereco
// }

// console.log(pessoaCompleto)
//****************************************************************************************** */

//****************************************************************************************** */
function spread(a, ...b){
    console.log(a)
    console.log(b)
}

spread(6, 8, 9, 7, 5)