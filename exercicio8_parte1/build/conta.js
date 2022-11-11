"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    _numero;
    _saldo;
    constructor(numero, saldoInicial) {
        if (saldoInicial < 0) {
            throw new Error('O saldo inicial não pode ser negativo');
        }
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    get getSaldo() {
        return this._saldo;
    }
    set setSaldo(valor) {
        this._saldo = valor;
    }
    get getNumero() {
        return this._numero;
    }
    sacar(valor) {
        if (valor < 0) {
            throw new Error('Nao é possível sacar valores negativos');
        }
        if (this.getSaldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        this.setSaldo = this.getSaldo - valor;
    }
    depositar(valor) {
        if (valor < 0) {
            throw new Error('Não é possivel depositar valores negativos');
        }
        this.setSaldo = this.getSaldo + valor;
    }
    transferir(conta, valor) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}
exports.Conta = Conta;
