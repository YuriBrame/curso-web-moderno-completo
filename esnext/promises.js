function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve aceita sempre apenas 1 parâmetro.
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat ('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
// .then pode ser encadeado quantas vezes vc quiser.
// .catch é usado para tratar os erros do reject.