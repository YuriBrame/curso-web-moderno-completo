const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))
console.log('{"a": 1, "b": 2, "c": 3}')
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))
// No JSON é necessário que todos os atributos estejam delimitados por aspas duplas.