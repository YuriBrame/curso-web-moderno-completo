const fs = require('fs')
const { resolve } = require('path')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = caminho => {
    return new Promise((resolve) => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)