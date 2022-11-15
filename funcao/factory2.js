// Minha tentativa
function criarProduto(x, y) {
    return {
        nome: (x),
        preco: (y),
        desconto: '15%'
    }
}

console.log(criarProduto('Banana', 7.99))

// Exemplo do professor
function criarProduto2(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.15
    }
}

console.log(criarProduto2('Banana', 7.99))