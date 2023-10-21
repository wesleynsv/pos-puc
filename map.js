//map

const map = new Map(); //Cria um novo map

map.set("nome", "Wesley"); // "chave", "valor"
map.set("idade",28); // "chave", "valor"

const idade = map.get("idade"); //Obtém o valor da chave 'idade'
console.log(idade);

const consultaNome = map.get("nome"); //Obtém o valor da chave 'nome'
console.log(consultaNome);

//Imprime cada valor do map
for (const [chave, valor] of map) {
    console.log(`Chave: ${chave}, valor: ${valor}`)
}