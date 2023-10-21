//PROJETO ESTACIONAMENTO main code

const Estacionamento = require('./classEstacionamento.js');

//Criando o objeto do estacionamento
//Confirmando na tela com console.log()
const estacionamento = new Estacionamento();

//Mensagem de inicio do sistema
console.log("Bem-vindo ao sistema de estacionamento WV PARK")

//Imprime na tela o objeto criado
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