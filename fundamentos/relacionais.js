console.log('01)', '1' == 1) // dois simbolos de igualdade são usados para comparação
console.log('02)', '1' === 1) // três simbolos de igualdade são usados para comparação extritamente igual, precisam ser do mesmo tipo também.
console.log('03)', '3' != 3)  // != é usado para para determinar diferença, sem comparar o tipo.
console.log('04)', '3' !== 3) // !== é usado para determinar extritamente diferente, levando em conta o tipo

console.log('05', 3 < 2)
console.log('06', 3 > 2)
console.log('07', 3 <= 2)
console.log('08', 3 >= 2)

// normalmente é mais indicado utilizar a igualdade extritamente igual para evitar erros e problemas.
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)
