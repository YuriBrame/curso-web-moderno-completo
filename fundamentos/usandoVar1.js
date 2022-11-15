// a variavel var é visível mesmo fora do bloco
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)

//variaveis dentro de funções são visiveis apenas dentro da função
function teste() {
    var local = 123
}
teste()
// console.log(local) - ao tentar acessar a variavel dentro da função, desencadeia um erro.

// Var possui apenas 2 tipos de escopos possíveis, global ou dentro de função.