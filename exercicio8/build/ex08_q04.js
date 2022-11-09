"use strict";
/*
    Quando o método transferir() chama o método sacar() e neste é lançada uma exceção,
    assim como as linhas de código restantes no método sacar() não são executadas, o
    mesmo também ocorre para as linhas restantes do método transferir(), logo não houve
    a conclusão do saque e nem do déposito.
*/
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
    set saldo(valor) {
        this._saldo += valor;
    }
    sacar(valor) {
        if (this.saldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    transferir(conta, valor) {
        conta.sacar(valor);
        conta.depositar(valor);
    }
}
exports.Conta = Conta;
let c1 = new Conta('001', 2500);
let c2 = new Conta('002', 100);
console.log(c1.saldo);
c1.transferir(c2, 3000);
console.log(c1.saldo);
