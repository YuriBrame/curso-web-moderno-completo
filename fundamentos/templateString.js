const nome = 'Rebeca';
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template);    //importante usar o simbolo de crase `para o template.

//expressões...
console.log(`1 + 1 = ${1 + 1}`);

//uma expressão dentro de uma template string começa com $ seguido de chaves {}
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)