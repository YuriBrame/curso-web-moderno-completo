const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

//Abordagem imperativa
let total1 = 0
for (let x = 0; x < alunos.length; x++) {
    total1 += alunos[x].nota
}
console.log(total1 / alunos.length)

// Abordagem Declarativa

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)