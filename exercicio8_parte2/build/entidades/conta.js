"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const aplicacaoErro_1 = require("../excecoes/aplicacaoErro");
const valorInvalidoErro_1 = require("../excecoes/valorInvalidoErro");
class Conta {
    _numero;
    _saldo = 0;
    constructor(numero, saldoInicial = 0) {
        this._numero = numero;
        //this.validarValor(saldoInicial);
        //this._saldo = saldoInicial;
        try {
            this.depositar(saldoInicial);
        }
        catch (e) {
            if (e instanceof aplicacaoErro_1.AplicacaoErro) {
                console.log(e.message);
            }
        }
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
    validarValor(valor) {
        if (valor <= 0) {
            throw new valorInvalidoErro_1.ValorInvalidoErro('Valor invalido.');
        }
    }
    sacar(valor) {
        this.validarValor(valor);
        if (this.getSaldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        this.setSaldo = this.getSaldo - valor;
    }
    depositar(valor) {
        this.validarValor(valor);
        this.setSaldo = this.getSaldo + valor;
    }
    transferir(conta, valor) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}
exports.Conta = Conta;
