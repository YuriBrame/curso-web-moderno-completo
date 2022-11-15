// A variavel a vai ser içada e irá constar como undefined, mesmo sem ter sido citada anteriormente. É inutil e não deve ser usado assim, sempre definir suas vaiaveis antes.
// Hoisting consiste em levar "içar" as variaveis para o topo.
console.log('a =', a);
var a = 2
console.log('a =', a);

console.log('b = ',b);
let b = 2;
console.log('b = ',b);
// o efeito de içamento ocorre apenas com VAR e não com LET