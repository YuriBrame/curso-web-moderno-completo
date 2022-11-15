console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// Fora de uma função o this aponta para module.exports, já dentro de uma função ele não aponta para isso e sim para global.

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()