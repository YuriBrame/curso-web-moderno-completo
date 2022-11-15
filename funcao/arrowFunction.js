let dobro = function (a) {
    return 2 * (a)
}

dobro = (a) => {
    return 2 * (a)
}

// a função arrow é uma função anônima, para puxa-la depois é necessário armazena-la em uma variável.

// ao remover as chaves, a função possui o retorno implícito. Muito utilizado em funções de uma única linha e parâmetro.
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui sim um parâmetro
console.log(ola())