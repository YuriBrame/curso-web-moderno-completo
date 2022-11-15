/* O array é um tipo de dados dinâmico colocado dentro de colchetes [], ele pode conter qualquer
    número de elementos e qualquer tipo de dado.
    é indicado criar arrays com um único tipo de dado
*/

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores [3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste') //o comando push adiciona novos elemntos ao array
console.log(valores);

console.log(valores.pop()) //o comando pop "saca" o último objeto de dentro de um array, e o retorna.
delete valores[0] //deleta o elemento indicado do array, pela posição.
console.log(valores)

console.log(typeof valores)