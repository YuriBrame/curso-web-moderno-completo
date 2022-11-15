// 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100

function encontrarPares () {
    let contador = 2

    while (contador <= 100) {
        console.log(contador)
        contador = contador +2
    }
}

encontrarPares() 

function encontrarPares2 () {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

encontrarPares2()