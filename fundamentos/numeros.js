const peso1 = 1.0;
const peso2 = Number('2.0');
// O tipo número serve tanto para números inteiros como quebrados no javascript
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //funnão que define como verdadeiro ou falso, saber se o numero é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //essa função limita o numero de casas decimais
console.log(media.toString(2)); //essa função converte para binário
console.log(typeof media);
console.log(typeof Number);