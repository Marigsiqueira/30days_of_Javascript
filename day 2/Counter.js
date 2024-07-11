/**
 * Dado um inteiro  n, retorna uma counterfunção. Esta counterfunção inicialmente retorna  n e então retorna 1 a mais que 
 * o valor anterior toda vez subsequente que é chamada ( n, n + 1, n + 2, etc).
 */

var createCounter = function(n) {
    return function() {
        return  n++;   
    }; 
}; 

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

