//PROJETO ESTACIONAMENTO
class Estacionamento {
    constructor() {
        this.numeroVagasTotais = 100;
        this.vagasCarro = 80;
        this.vagasMoto = 20;
        this.vagasIdosos = 15;
    }
}

//Criando o objeto do estacionamento
//Confirmando na tela com console.log()
const estacionamento = new Estacionamento();
console.log(estacionamento);