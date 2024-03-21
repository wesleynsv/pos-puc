// Definindo a classe Carro
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        console.log("O carro está ligado.");
      } else {
        console.log("O carro já está ligado.");
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        this.velocidade = 0;
        console.log("O carro está desligado.");
      } else {
        console.log("O carro já está desligado.");
      }
    }
  
    acelerar(incremento) {
      if (this.ligado) {
        this.velocidade += incremento;
        console.log(`O carro acelerou para ${this.velocidade} km/h.`);
      } else {
        console.log("Não é possível acelerar, o carro está desligado.");
      }
    }
  
    frear(decremento) {
      if (this.ligado) {
        if (this.velocidade - decremento >= 0) {
          this.velocidade -= decremento;
          console.log(`O carro reduziu a velocidade para ${this.velocidade} km/h.`);
        } else {
          console.log("O carro já está parado.");
        }
      } else {
        console.log("Não é possível frear, o carro está desligado.");
      }
    }
  }
  
  // Criando um objeto Carro
  const meuCarro = new Carro("Toyota", "Corolla", 2020);
  
  // Testando as operações
  console.log("Iniciando testes:");
  meuCarro.ligar();
  meuCarro.acelerar(50);
  meuCarro.frear(20);
  meuCarro.desligar();
  meuCarro.acelerar(30);
  