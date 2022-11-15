Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let x = 0; x < this.length; x++) {
        if(callback(this[x], x, this)) {
            newArray.push(this[x])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome:'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico, preco: 18.99', fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil //não necessita colocar o == true, como o valor já está em boleanos.

console.log(produtos.filter2(caro).filter2(fragil))