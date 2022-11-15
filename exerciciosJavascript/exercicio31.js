/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

const vetor = [10, -5, 2, -17, -2, 4, 17]

function contarNegativos (vetor) {
    let qtdNegativos = 0

    for (let x = 0; x < vetor.length; x++) {
        if (vetor[x] < 0) {
            qtdNegativos++
        }
    }
    return console.log(`Existem ${qtdNegativos} números negativos no vetor.`)
}

contarNegativos(vetor)