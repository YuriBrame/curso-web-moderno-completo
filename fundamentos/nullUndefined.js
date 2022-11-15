let valor // não inicializada
console.log(valor)

valor = null // null significa ausência de valor, usado para zerar uma variável
console.log(valor)
// console.log(valor.tostring()) caso se tente acessar uma variavel nula ou undefined vai gerar erro.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco - usar para remover o atributo de um objeto
console.log(produto)

produto.preco = null // usado para sinalizar que algo está sem valor
console.log(!!produto.preco)
console.log(produto)