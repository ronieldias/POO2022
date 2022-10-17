"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, saldo) {
        this._numero = numero;
        this._saldo = saldo;
    }
    //getters e setters
    get numero() {
        return this._numero;
    }
    set numero(n) {
        this._numero = n;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(s) {
        this._saldo = s;
    }
    //***
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
    /* INUTILIZADA PELA IMPLEMENTAÇÃO DO GET
    public consultarSaldo(): number {
        return this.saldo;
    }
    */
    transferir(contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            console.log('\nERRO (CONTA TRANSFERIR) - saldo insuficiente\n');
        }
        return false;
    }
}
exports.Conta = Conta;
