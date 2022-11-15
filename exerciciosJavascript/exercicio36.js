/* 36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

const vetorTeste = [2, 3, 4, 5, 7, 9, 10]

function multiplicarVetor (vetorNumeros, numero) {
    vetorObjetivo = []

    for (let x = 0; x < vetorNumeros.length; x++) {
        vetorObjetivo.push(vetorNumeros[x] * numero)
    }
    return vetorObjetivo
}

function multiplicarVetor2 (vetorNumeros, numero) {
    vetorObjetivo = []

    for (let x = 0; x < vetorNumeros.length; x++) {
        if (vetorNumeros[x] >= 5) {
            vetorObjetivo.push(vetorNumeros[x] * numero)
        }
    }
    return vetorObjetivo
}

console.log(multiplicarVetor(vetorTeste, 2))
console.log(multiplicarVetor2(vetorTeste, 2))