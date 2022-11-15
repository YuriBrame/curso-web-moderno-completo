/* 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculadora (num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return console.log(num1 + num2)
        case '-':
            return console.log(num1 - num2)
        case '*':
            return console.log(num1 * num2)
        case '/':
            return console.log('Divisão: ', num1 / num2, 'Resto: ', num1 % num2)
        default:
            return console.log('Erro - Operação Inválida')
    }
}

calculadora(10, '+', 5)
calculadora(25, '-', 12)
calculadora(44, '*', 15)
calculadora(27, '/', 2)
calculadora(8358, '-', 8358)