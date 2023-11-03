//CLASSES DO PROJETO ESTACIONAMENTO
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

        return 'A vaga ' + numeroVaga + ' está '+ this.statusVagas[numeroVaga -1];
    }

    //Método para ocupar uma vaga pelo número
    ocuparVaga(numeroVaga){
        if (numeroVaga < 1 || numeroVaga > this.numeroVagasTotais){
            return 'Número de vaga invalido';
        }

        if (this.statusVagas[numeroVaga -1] === 'Disponível'){
            this.statusVagas[numeroVaga -1] = 'Ocupada';
            return 'A vaga ' + numeroVaga + ' foi ocupada com sucesso!';
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
            return  'A vaga ' + numeroVaga +' foi liberada com sucesso!'
        } else {
            return 'A vaga ' + numeroVaga + ' já está liberada!'
        }
    }
}

//Exporta a classe
module.exports = Estacionamento;