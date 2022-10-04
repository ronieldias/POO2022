"use strict";
/*
a) O resultado dos três prints serão 90, 90 e 90. Pois todas as variáveis estão apontando
para o mesmo objeto:
c1 -> c2
c3 -> c1 que aponta pra c2
b) É deletado automaticamente por um serviço de coleta de lixo que frequentemente percorre a
memória e exclui objetos sem referência.
*/
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
