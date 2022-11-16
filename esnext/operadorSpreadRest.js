// Operador ... rest(juntar) / spread(espalhar)
// Usar o rest com um parâmetro de função
// usar o spread com um objeto

const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread em array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)