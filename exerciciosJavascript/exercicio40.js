/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */

function avaliarNotas (vetor) {
    for (let x = 0; x < vetor.length; x++) {
        if (vetor[x] >= 0 && vetor[x] <= 4.9) {
            console.log(`Nota: ${vetor[x]} - Conceito D.`)
        } if (vetor[x] >= 5 && vetor[x] <= 6.9) {
            console.log(`Nota: ${vetor[x]} - Conceito C.`) 
        } if (vetor[x] >= 7 && vetor[x] <= 8.9) {
            console.log(`Nota: ${vetor[x]} - Conceito B.`)
        } if (vetor[x] >= 9 && vetor[x] <= 10) {
            console.log(`Nota: ${vetor[x]} - Conceito A.`)
        } if (vetor[x] < 0 || vetor[x] > 10) {
            console.log(`Nota: ${vetor[x]} - Nota Inválida.`)
        }
    }
}

avaliarNotas([1, 8, 9.5, 6.7, 13])