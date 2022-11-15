const escola = "Cod3r";

console.log(escola.charAt(4)); //esse comando retorna o caractêre de uma posição especifica
console.log(escola.charAt(5)); //espaços vazios só retornam sem nada
console.log(escola.charCodeAt(3)); //esse comando diz o código relacionado a tabela unicode
console.log(escola.indexOf('3')); //retorna a posição da primeira ocorrência do que foi pedido, começa com 0.

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));