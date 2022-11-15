/*13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diaUtil (numero) {
    switch (numero) {
        case 7: 
            return 'Fim de Semana'
        case 6: 
        case 5:
        case 4: 
        case 3: 
        case 2:
            return 'Dia útil'
        case 1: 
            return 'Fim de Semana'
        default: 
            return 'Data Inválida'
    }
}

console.log(diaUtil(0))
console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(3))
console.log(diaUtil(4))
console.log(diaUtil(5))
console.log(diaUtil(6))
console.log(diaUtil(7))
console.log(diaUtil(10))