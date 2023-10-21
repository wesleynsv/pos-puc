const arvore = {
    nome: "Árvore genealógica", //Nó raiz pai de todos
    filhos: [
        {
            nome: "Pai", //Filho da árvore genealógica, tem dois filhos "Filho1" e "Filho2"
            filhos: [
                {
                    nome: "Filho1", //Filho do pai, sem filhos
                    filhos: [],
                },
                {
                    nome: "Filho2", //Filho do pai, sem filhos
                    filhos: [],
                },
                
            ]
        },
        {
            nome: "Mãe", //Filho da árvore genealógica, não tem filhos
            filhos: [],
        },
    ],
};

console.log(arvore);