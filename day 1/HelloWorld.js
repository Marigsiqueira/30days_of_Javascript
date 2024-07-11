/**
 * Escreva uma função  createHelloWorld. Ela deve retornar uma nova função que sempre retorna "Hello World"
 */

function createHelloWorld(){
    return function(){
        return "Hello World"
    }
}

const f = createHelloWorld();
console.log(f())

