//PROJETO ESTACIONAMENTO
class Estacionamento {
    constructor() {
        this.numeroVagasTotais = 100;
        this.vagasCarro = 80;
        this.vagasMoto = 20;
        this.vagasIdosos = 15;

        //Array para monitorar o status das vagas
        this.statusVagas = Array(this.numeroVagasTotais).fill('Disponível');
    }

    //Método para verificar o status de uma vaga pelo número
    verificarStatusVaga(numeroVaga) {
        if (numeroVaga < 1 || numeroVaga > this.numeroVagasTotais){
            return 'Número de vaga invalido';
        }

        return this.statusVagas[numeroVaga -1];
    }

    //Método para ocupar uma vaga pelo número
    ocuparVaga(numeroVaga){
        if (numeroVaga < 1 || numeroVaga > this.numeroVagasTotais){
            return 'Número de vaga invalido';
        }

        if (this.statusVagas[numeroVaga -1] === 'Disponível'){
            this.statusVagas[numeroVaga -1] = 'Ocupada';
            return 'Vaga ocupada com sucesso!';
        } else {
            return 'Vaga já está ocupada!'
        }
    }

    liberarVaga(numeroVaga){
        if (numeroVaga < 1 || numeroVaga > this.numeroVagasTotais){
            return 'Número de vaga invalido';
        }

        if (this.statusVagas[numeroVaga -1] === 'Ocupada'){
            this.statusVagas[numeroVaga -1] = 'Disponível';
            return 'Vaga liberada com sucesso!'
        } else {
            return 'A vaga já está liberada!'
        }
    }
}

//Criando o objeto do estacionamento
//Confirmando na tela com console.log()
const estacionamento = new Estacionamento();
console.log(estacionamento);
//Consultar disponibilidade da vaga
console.log(estacionamento.verificarStatusVaga(5));
//Ocupar uma vaga
console.log(estacionamento.ocuparVaga(5));
//Consultar disponibilidade da vaga
console.log(estacionamento.verificarStatusVaga(5));
//Liberar uma vaga
console.log(estacionamento.liberarVaga(5));
//Consultar disponibilidade da vaga
console.log(estacionamento.verificarStatusVaga(5));