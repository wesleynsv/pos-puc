const set = new Set(); //cria um novo set

//Adiciona esses valores ao set
set.add(1);
set.add(2);
set.add(3);

//Verifica se tem o valor '1' dentro do set
console.log(set.has(1));

//Delete o valor '2' do set
set.delete(2);

//Imprime cada valor do set
for (const elemento of set) {
    console.log(elemento);
}
