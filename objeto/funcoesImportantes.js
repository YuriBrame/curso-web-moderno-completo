const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Define se a propriedade é visivel ou não por comandos como o .keys
    writable: false, // Define se a propriedade é editável, funciona mais ou menos como um freeze
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 , a: 4}
const obj = Object.assign(dest, o1, o2)
// funciona concatenando todos os objetos selecionados em um objeto de destino.
// caso possuam objetos iguais, o valor será sobreescrito.

console.log(dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)