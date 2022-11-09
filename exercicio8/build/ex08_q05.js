"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.Conta = void 0;
/*
    - Sim, o lançamento da exceção de conta.sacar() foi propagado para conta.transferir(),
    se este fosse chamado, a exceção seria lançada em tela.
    - Entretanto, não houve propagação da exceção para banco.transfeir(), apenas dos seus efeitos,
    pois os dados continuam consistentes. A execução de banco.transferir() nunca transferirá um valor
    maior do que o saldo disponível na conta mas, por fim, a exceção não é lançada em tela.
    - É uma implementação que mantém a consistencia dos dados, mas pode soar como inconfiável por nao
    saber-mos ao certo o que aconteceu.
*/
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
    get numero() {
        return this._numero;
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
class Banco {
    _contas = [];
    inserir(conta) {
        let contaConsultada = this.consultar(conta.numero);
        if (contaConsultada == null) {
            this._contas.push(conta);
        }
    }
    consultar(numero) {
        let contaConsultada;
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    }
    consultarPorIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }
    transferir(numeroDebito, numeroCredito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }
}
exports.Banco = Banco;
let conta1 = new Conta("001", 199);
let conta2 = new Conta("002", 200);
let banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);
banco.transferir("001", "002", 200);
console.log(conta1.saldo);
console.log(conta2.saldo);
banco.sacar('002', 201);
