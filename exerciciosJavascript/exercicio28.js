// 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

//Minha tentativa
const vetor = [10, 2, 5, 7, 14, 13, 25, 97, 100]

function separarParEImpar(array) {
    let pares = []
    let impares = []
    
    array.forEach(element => {
        if (element % 2 == 0) {
            pares.push(element)
        } if (element % 2 != 0) {
            impares.push(element)
        }
    })
    return console.log(`Existem ${pares.length} números pares, e ${impares.length} números impares.`)
}

separarParEImpar(vetor)

//Exemplo do professor.

function paresEImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else{
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números impares.`)
}

const vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresEImpares(vetor2)