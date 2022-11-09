"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const contaPoupanca_1 = require("./contaPoupanca");
class Banco {
    _contas = [];
    get contas() {
        return this._contas;
    }
    inserir(contaPassada) {
        if (!this.consultar(contaPassada.numero)) {
            this._contas.push(contaPassada);
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this._contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this._contas[indice] = c;
        }
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.saldo += valor;
        }
    }
    sacar(numero, valor) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            this._contas[indice].sacar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }
    consultarSaldo(numero) {
        let conta = this.consultar(numero);
        return conta.saldo;
    }
    renderJuros(numero) {
        let conta = this.consultar(numero);
        if (conta != null && conta instanceof contaPoupanca_1.Poupanca) {
            conta.renderJuros();
        }
    }
}
exports.Banco = Banco;
