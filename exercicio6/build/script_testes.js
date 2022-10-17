"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex06_q04_1 = require("./ex06_q04");
const ex06_q03_1 = require("./ex06_q03");
// testes conta
let c1 = new ex06_q04_1.Conta('1', 1000);
console.log(c1);
console.log('Sacou 1001? ' + c1.sacar(1001));
console.log(c1);
c1.depositar(100);
console.log('Depositou 100');
console.log(c1);
console.log('Sacou 1001? ' + c1.sacar(1001));
console.log(c1);
//***
let c2 = new ex06_q04_1.Conta('2', 500);
console.log('Transferir 501 de c2 -> c1');
c2.transferir(c1, 501);
console.log(c2);
console.log('Transferir 500 de c2 -> c1');
c2.transferir(c1, 500);
console.log(c2);
//**********************************
//testes banco
let b1 = new ex06_q03_1.Banco();
b1.inserir(new ex06_q04_1.Conta('1', 100));
b1.inserir(new ex06_q04_1.Conta('2', 200));
b1.inserir(new ex06_q04_1.Conta('3', 300));
console.log(b1);
console.log(b1.mediaSaldoContas());
//***
let b2 = new ex06_q03_1.Banco();
b2.inserir(new ex06_q04_1.Conta("10", 1000));
b2.inserir(new ex06_q04_1.Conta("10", 2000)); //erro - numero de conta ja existente
console.log(b2.consultar("2")); //nao encontrada
//console.log(b2.consultarIndice("10")); //erro - metodo privado
let cTeste = new ex06_q04_1.Conta("2", 3000);
b2.alterar(cTeste); //nao encontrada
cTeste.numero = '10';
b2.alterar(cTeste); //conta 10 alterada
console.log(b2.consultar("10").saldo); //3000
b2.inserir(new ex06_q04_1.Conta("30", 5000)); //conta 30 inserida no array de b2
b2.excluir('1'); //erro conta inexiste
b2.excluir('10'); // conta 10 excluida
console.log(b2.consultar('30'));
b2.depositar("3", 100); //erro conta inexiste
console.log(b2.consultar("30").saldo); //5000
console.log(b2);
//***
let b3 = new ex06_q03_1.Banco();
b3.inserir(new ex06_q04_1.Conta('5', 100));
b3.inserir(new ex06_q04_1.Conta('6', 200));
b3.inserir(new ex06_q04_1.Conta('7', 300));
console.log(b3);
b3.depositar('5', 50);
console.log('Operacao saque 210,00 de conta 6:');
b3.sacar('6', 210); //erro - saldo insuficiente
console.log('Operacao saque 150,00 de conta 6:');
b3.sacar('6', 150); //sucesso
console.log(b3.consultarSaldo('7'));
console.log(b3);
console.log(b1, b2, b3);
