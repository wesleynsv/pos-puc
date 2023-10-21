//Remover o item duplicado e adicionar o item faltante

let lista = ['a','b','b','c','d','e','g'] //Cria uma lista com erros que devem ser corrigidos

console.log(lista);

lista.splice(1,1); // Remove o item duplicado da lista
console.log(lista);

lista.splice(5,0,'f'); // Adiciona o item faltante na lista
console.log(lista);