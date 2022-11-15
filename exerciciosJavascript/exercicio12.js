// 12)​ Faça um algoritmo que calcule o fatorial de um número.

// Método de Recursão
function fatoriar(numero) {
    if (numero < 0)
        return -1
    else if (numero == 0)
        return 1
    else    
        return (numero * fatoriar(numero -1))
}

console.log(fatoriar(5))

// Método While
function fatoriar2 (number) {
    let result = number

    if (number === 0 || number === 1)
        return 1
    while (number > 1) {
        number--
        result = result * number
    }
    return result
}

console.log(fatoriar2(6))

/* explicação
function factorialize(num) {
  // Passo 1. Criar uma variável result para armazenar o valor de num
  var result = num;
   
  // Se num = 0 OU num = 1, o fatorial retornará 1
  if (num === 0 || num === 1) 
    return 1; 
 
  // Passo 2. Criar o laço WHILE 
  while (num > 1) { 
    num--; // diminuir 1 a cada iteração
    result = result * num; // ou result *= num; 
    /* 
                    num           num--      var result      result *= num         
    1ª iteração:   5             4            5             20 = 5 * 4      
    2ª iteração:   4             3           20             60 = 20 * 3
    3ª iteração:   3             2           60            120 = 60 * 2
    4ª iteração:   2             1          120            120 = 120 * 1
    5ª iteração:   1             0          120
    Fim do laço WHILE 
    
}
     
// Passo 3. Retornar o fatorial do inteiro fornecido
return result; // 120
}
factorialize(5); */