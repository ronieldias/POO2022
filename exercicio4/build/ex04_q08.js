"use strict";
var Contaa = /** @class */ (function () {
    function Contaa(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Contaa.prototype.sacar = function (valor) {
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    };
    Contaa.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Contaa.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Contaa.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    };
    return Contaa;
}());
var conta1 = new Contaa('1', 100);
var conta2 = new Contaa('2', 200);
console.log("############# CONTA ".concat(conta1.numero, " #############"));
console.log(conta1);
console.log("Conta ".concat(conta1.numero, " sacou 50,00 |").concat(conta1.sacar(50), "|")); //sacou? true
console.log(conta1);
console.log("Conta ".concat(conta1.numero, " sacou 51,00 |").concat(conta1.sacar(51), "|")); // sacou? false
console.log(conta1);
console.log("\n############# CONTA ".concat(conta2.numero, " #############"));
console.log(conta2);
console.log("Conta ".concat(conta2.numero, " transferiu 100,00 |").concat(conta2.transferir(conta1, 100), "|"));
console.log(conta2);
console.log("Conta ".concat(conta2.numero, " transferiu 101,00 |").concat(conta2.transferir(conta1, 101))); // sacou? false
console.log(conta1);
