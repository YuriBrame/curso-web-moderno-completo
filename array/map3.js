Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let x = 0; x < this.length; x++) {
        newArray.push(callback(this[x], x, this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços

const transformarJson = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
resultado = carrinho.map2(transformarJson).map2(apenasPreco)
console.log(resultado)