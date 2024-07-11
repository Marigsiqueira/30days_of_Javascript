/** 
Escreva uma função  createCounter que ajude os desenvolvedores a testar seus códigos. Ela deve receber qualquer valor  
init e retornar um objeto com as funções a seguir.

As três funções são:
increment() aumenta o valor atual em 1 e depois o retorna.
decrement() reduz o valor atual em 1 e depois o retorna.
reset() define o valor atual  init e então o retorna.
*/

var createCounter = function(init) {
    recebeInit = init
    return {
        increment: function(){
            recebeInit = recebeInit + 1;
            return recebeInit
        },
        decrement: function(){
            recebeInit = recebeInit - 1;
            return recebeInit
        },
        reset: function(){
            recebeInit = init
            return recebeInit

        }
    }
    
};

  const counter = createCounter(5)
  counter.increment(); // 6
  counter.reset(); // 5
  counter.decrement(); // 4
 
