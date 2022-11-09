"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    _numero;
    _saldo;
    constructor(numero, saldo) {
        this._numero = numero;
        this._saldo = saldo;
    }
    get numero() {
        return this._numero;
    }
    set numero(valor) {
        this._numero = valor;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
exports.Conta = Conta;
