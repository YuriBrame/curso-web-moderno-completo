/* 01)​ Crie uma função que dado dois valores (passados como parâmetros) 
mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const operacoesBasicas = (num1, num2) => {
    const result = {
        soma: num1 + num2, 
        subtracao: num1 - num2, 
        multiplicacao: num1 * num2, 
        divisao: num1 / num2
    }

    console.log(result)
}

operacoesBasicas(3, 4)