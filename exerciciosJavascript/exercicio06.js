/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

aplicacaoJurosSimples = (capital, juros, tempoMeses) => {
    const result = capital + (capital * juros/100 * tempoMeses)
    console.log(result.toFixed(2))
}

aplicacaoJurosCompostos = (capital, juros, tempoMeses) => {
    const result = capital * (1 + juros/100) ** tempoMeses
    console.log(result.toFixed(2))
}

aplicacaoJurosSimples(2000, 8, 4)
aplicacaoJurosCompostos(2000, 10, 6)