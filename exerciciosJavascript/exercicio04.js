/* 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

divisaoComResto = (dividendo, divisor) => {
    const divisao = dividendo / divisor

    const resto = dividendo % divisor

    const result = {
        resultado: divisao.toFixed(2),
        resto: resto
    }

    console.log(result)
}

divisaoComResto(9, 2)
/*divisaoComResto(15, 2)
divisaoComResto(27, 9)
divisaoComResto(10, 3) */