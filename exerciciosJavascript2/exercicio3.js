calculoSalarioLiquido = (horasTrabalhadas, salarioHora) => {
    const impostos = 0.7
    let salarioLiquido = (salarioHora * horasTrabalhadas) * impostos
    console.log(`Salário líquido é igual a R$ ${salarioLiquido.toFixed(2)}`)
}

calculoSalarioLiquido(180, 60)