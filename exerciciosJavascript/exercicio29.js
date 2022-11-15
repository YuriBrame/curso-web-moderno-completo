/* 29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações */

const vetor = [2, 7, 9, 10, 14, 17, 18, 20, 33, 55, 90]

function contarEntre10e20(vetorNumeros) {
    let qtdDentro = 0
    let qtdFora = 0

    for (let x = 0; x < vetorNumeros.length; x++) {
        if (vetorNumeros[x] >= 10 && vetorNumeros[x] <=20) {
            qtdDentro++
        } else {
            qtdFora++
        }
    }
    return console.log(`${qtdDentro} números estão dentro do intervalo, e ${qtdFora} não estão.`)
}

contarEntre10e20(vetor)