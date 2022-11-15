// 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const vetor = [2, 7, 44, 23, 98, 55, 17]

function maiorEMenor (vetorNumeros) {
    const maiorNumero = vetorNumeros.reduce(function(prev, current) {
        return prev > current ? prev : current
    })

    const menorNumero = vetorNumeros.reduce(function(prev, current) {
        return prev < current ? prev : current
    })

    console.log(maiorNumero, menorNumero)
}

maiorEMenor(vetor)

// Exemplo do professor

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

console.log(maiorMenor(vetor))