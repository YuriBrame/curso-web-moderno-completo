const pilotos = ['Vettel', 'Alonso', 'Raikkonnen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array.
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o elemento na primeira posição do array.
console.log(pilotos)

//usado para remover e/ou adicionar elementos.

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria um novo array a partir do elemento passado como parametro.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)