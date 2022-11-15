/* 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Um', 'Dois', 'Três', 'Quatro']
let vetorDouble = [1.5, 2.5, 3.5, 4.5]

let concatenacao1 = vetorInteiro.concat(vetorString)

console.log(concatenacao1)

function concatenar (... vetores) {
    resultado = []
    for (let x = 0; x < vetores.length; x++) {
        resultado = resultado.concat(vetores[x])
    }
    return console.log(resultado)
}

concatenar(vetorInteiro, vetorString)
concatenar(vetorDouble, vetorInteiro)