function lanche (codProduto, quantidade) {
    switch (codProduto) {
        case 100:
            return `${quantidade} Cachoro Quente - Total a pagar: R$ ${quantidade * 3}`
        case 200:
            return `${quantidade} Hambúrguer Simples - Total a pagar: R$ ${quantidade * 4}`
        case 300:
            return `${quantidade} Cheeseburguer - Total a pagar: R$ ${quantidade * 5.5}`
        case 400:
            return `${quantidade} Bauru - Total a pagar: R$ ${quantidade * 7.5}`
        case 500:
            return `${quantidade} Refrigerante - Total a pagar: R$ ${quantidade * 3.5}`
        case 600:
            return `${quantidade} Suco - Total a pagar: R$ ${quantidade * 2.8}`
        default:
            return 'Produto não existente.'
    }
}

console.log(lanche(100, 1))
console.log(lanche(200, 2))
console.log(lanche(300, 4))
console.log(lanche(400, 3))
console.log(lanche(500, 1))
console.log(lanche(600, 5))
console.log(lanche(235, 15))