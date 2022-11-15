/* 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function calcularAnuidade (valor, mes) {
    if (mes > 0 && mes < 13) {
            atraso = mes - 1
            return (valor * ((1 + (5/100)) ** atraso)).toFixed(2)
    } else {
        return 'Mês Inváldo'
    }
}

console.log(calcularAnuidade(1000, 1))
console.log(calcularAnuidade(1000, 2))
console.log(calcularAnuidade(1000, 3))
console.log(calcularAnuidade(1000, 4))
console.log(calcularAnuidade(1000, 5))
console.log(calcularAnuidade(1000, 6))
console.log(calcularAnuidade(1000, 7))
console.log(calcularAnuidade(1000, 8))
console.log(calcularAnuidade(1000, 9))
console.log(calcularAnuidade(1000, 10))
console.log(calcularAnuidade(1000, 11))
console.log(calcularAnuidade(1000, 12))
console.log(calcularAnuidade(1000, 13))

/* minha primeira tentativa...

function valorAnuidade (valorAnuidade, mesPagamento) {
    const juros = 5
    const calculoDeJuros = (valorAnuidade * (1 + juros/100) ** mesPagamento).toFixed(2)
    let result = `Valor a ser pago R$: ${calculoDeJuros}`
    
    switch (mesPagamento) {
        case 1: 
            return `Valor a ser pago R$: ${valorAnuidade}`
        case 2: 
            return result
        case 3:
            return result
        case 4:
            return result
        case 5:
            return result
        case 6:
            return result
        case 7 :
            return result
        case 8:
            return result
        case 9:
            return result
        case 10:
            return result
        case 11:
            return result
        case 12:
            return result
        default :
            return "Mês de Pagamento inválido"
    }
    */