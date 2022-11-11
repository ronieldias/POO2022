"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
const banco_1 = require("./banco");
/*  Situação das contas{
        Conta 001, Saldo 2500.
        Conta 002, Saldo 100.
    }
    Operação{
        - Transferir 3000 de Conta 001 para Conta 002 chamando 'banco.transferir()'.
    }
    - Sim, o lançamento da exceção de 'conta.sacar()' foi propagado para 'conta.transferir()' e para
      'banco.transferir()', pois ambos os métodos, na sequencia, fazem chamada direta e indireta, do
      método 'conta.sacar()'.
    - Concluindo, a execução de 'conta.transfereir' e de 'banco.transferir()' nunca pemitirá a efetivação
      de uma transferência de um valor maior do que o saldo disponível na conta de origem.
    - É uma implementação de alta confiabilidade, pois a colocação da exceção diretamente no método onde
      está o problema garante que ela possa ser lançada sempre que o método for chamado.*/
let conta1 = new conta_1.Conta("001", 2500);
let conta2 = new conta_1.Conta("002", 100);
let banco = new banco_1.Banco();
banco.inserir(conta1);
banco.inserir(conta2);
console.log('C001 Saldo:', banco.consultar('001').getSaldo);
console.log('C002 Saldo:', banco.consultar('002').getSaldo);
banco.transferir('001', '002', 3000); //lançada a exceção
console.log('C001 Saldo:', banco.consultar('001').getSaldo);
console.log('C002 Saldo:', banco.consultar('002').getSaldo);
