/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function compararString (string1, string2) {
    let estaContido = true
    for (let x = 0; x < string1.length; x++) {
        let caractereString1 = string1.charAt(x).toLowerCase()
        for (let y = 0; y < string2.length; y++) {
            let caractereString2 = string2.charAt(y).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
          } else {
            estaContido = false
          }
        } 
        if (!estaContido) {
            return estaContido
        }
    }
    for (let x = 0; x < string2.length; x++) {
            let caractereString2 = string2.charAt(x).toLowerCase()
            
            for (let y = 0; y < string1.length; y++) {
                let caractereString1 = string1.charAt(y).toLowerCase()

                if (caractereString1 == caractereString2) {
                    estaContido = true
                    break
                } else {
                    estaContido = false
                }
            }
            if (!estaContido) {
                return estaContido
            }
        }
        return estaContido
    }

console.log(compararString('abcdf', 'dcba'))
console.log(compararString('abcdf', 'ABCDF'))