"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(contaPassada) {
        if (this.consultar(contaPassada.numero)) {
            console.log(`ERRO (BANCO INSERIR) - numero ${contaPassada.numero} já percente a uma conta existente\n`);
        }
        else {
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
        else {
            console.log('ERRO (BANCO ECLUIR) - conta inexistente');
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.saldo += valor;
        }
        else {
            console.log('ERRO (BANCO DEPOSITAR) - conta inexistente');
        }
    }
    sacar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            if (conta.saldo - valor >= 0) {
                conta.saldo -= valor;
            }
            else {
                console.log('ERRO (BANCO SACAR) - saldo insuficiente');
            }
        }
        else {
            console.log('ERRO (BANCO SACAR) - conta inexistente');
        }
    }
    consultarSaldo(numero) {
        let conta = this.consultar(numero);
        return conta.saldo;
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
        else {
            console.log('\nERRO (BANCO TRANSFERIR) - uma das contas passadas nao existe\n');
        }
    }
    quantidadeContas() {
        return this._contas.length;
    }
    totalDinheiroContas() {
        let total = 0;
        for (let i in this._contas) {
            total += this._contas[i].saldo;
        }
        return total;
    }
    mediaSaldoContas() {
        return this.totalDinheiroContas() / this.quantidadeContas();
    }
}
exports.Banco = Banco;
