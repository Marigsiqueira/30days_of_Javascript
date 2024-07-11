/*
Escreva uma função  expect que ajude os desenvolvedores a testar seus códigos. Ela deve receber qualquer valor  val e 
retornar um objeto com as duas funções a seguir:

1. toBe(val) aceita outro valor e retorna  true se os dois valores  === são iguais. Se não forem iguais, deve lançar um
erro  "Not Equal".

2. notToBe(val) aceita outro valor e retorna  true se os dois valores  !== são iguais. Se forem iguais, deve lançar um 
erro  "Equal".
*/

var expect = function(val) {
    return {
        toBe: function(val2){
            if(val2 !== val) throw new Error("Not Equal")
            return true
        },

        notToBe: function(val2){
            if(val === val2) throw new Error("Equal")
            return true
        }
    }   
}

console.log(expect(5).toBe(5))

