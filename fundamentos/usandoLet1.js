/* 
O let possui uma variedade de escopos maior, contanto com ecopo de bloco também. 
Caso a variavel esteja presente dentro do escopo menor, 
ele usará ela, se não irá procurar no mais abrangente
*/
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)