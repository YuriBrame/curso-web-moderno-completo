/* 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */

classificarTriangulo = (lado1, lado2, lado3) => {
    const isEquilatero = lado1 === lado2 && lado2 === lado3
    
    const isEscaleno = lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3

    const isIsosceles = lado1 === lado2 || lado1 === lado3 || lado2 === lado3

    if(isEquilatero) {
        console.log('É um Triângulo Equilátero')
        return
    }

    if(isEscaleno) {
        console.log('É um Triângulo Escaleno')
        return
    }

    if(isIsosceles) {
        console.log('É um Triângulo Isósceles')
        return
    }

    throw new Error ('Se chegou aqui é porque deu ruim, então lancei uma excessão')
}

classificarTriangulo(2, 2, 2)
classificarTriangulo(2, 3, 4)
classificarTriangulo(2, 3, 3)