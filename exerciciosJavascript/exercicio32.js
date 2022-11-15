// 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const vetor = [2, 6, 10, 4]

function mediaAritimetica (vetor) {
    let soma = 0
    
    for (let x = 0; x < vetor.length; x++) {
        soma += vetor[x]
    }

    return soma / vetor.length
}

console.log(mediaAritimetica(vetor))