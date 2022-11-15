function Pessoa(nome) {
        this.nome = nome
        this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
        }
}

const p1 = new Pessoa ('João')
p1.falar()

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

console.log(criarPessoa('Pedro', 'Henrique', 45))