// como copiar um forEach. Totalmente inutil.

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

Array.prototype.forEach2 = function(callback) {
    for (let x = 0; x < this.length; x++) {
        callback(this[x], x, this)
    }
}

 aprovados.forEach2(function(nome, indice) {
    console.log(`${indice +1}) ${nome}`)
})

