"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    _numero;
    _saldo;
    constructor(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (this.saldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
    }
}
exports.Conta = Conta;
let c = new Conta('001', 2500.50);
c.sacar(2000);
console.log(c.saldo);
c.sacar(1000);
console.log(c.saldo);
