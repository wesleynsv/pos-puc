const fila = [1,2,3,4,5]; //Cria uma fila com os valores dentro dos colchetes

console.log(fila) //Imprime os valores da fila
fila.push(5,6,7); //Enfilera os valores dentro dos parenteses. Comandou "enqueue" não funcionou

const saiFila = fila.shift(); //Tira o primeiro item da lista (FIFO)
console.log("O elemento que saiu é: "+saiFila); //Imprime o item que saiu
console.log(fila); //Mostra a fila atualizada 