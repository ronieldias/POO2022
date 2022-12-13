"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const aplicacaoErro_1 = require("../excecoes/aplicacaoErro");
const contaInexistenteErro_1 = require("../excecoes/contaInexistenteErro");
const contaPoupanca_1 = require("./contaPoupanca");
class Banco {
    _contas = [];
    // *** metodos auxiliares ***
    contaExiste(numero) {
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].getNumero == numero) {
                return true;
            }
        }
        return false;
    }
    consultarPorIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].getNumero == numero) {
                indice = i;
                break;
            }
        }
        if (indice == -1) {
            throw new contaInexistenteErro_1.ContaInexistenteErro('Conta inexistente'); //exceção
        }
        return indice;
    }
    // *** demais métodos ***
    consultar(numero) {
        let contaConsultada;
        try {
            let indice = this.consultarPorIndice(numero); //possivel exceção
            contaConsultada = this._contas[indice];
        }
        catch (e) {
            console.log(e.message);
        }
        return contaConsultada;
    }
    inserir(conta) {
        if (!this.contaExiste(conta.getNumero)) {
            this._contas.push(conta);
        }
        //lançar execeção!
    }
    alterar(conta) {
        try {
            let indice = this.consultarPorIndice(conta.getNumero);
            this._contas[indice] = conta;
        }
        catch (e) {
            if (e instanceof aplicacaoErro_1.AplicacaoErro) {
                console.log(e.message);
            }
        }
    }
    excluir(numero) {
        try {
            let indice = this.consultarPorIndice(numero); //exceção
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
        catch (e) {
            if (e instanceof aplicacaoErro_1.AplicacaoErro) {
                console.log(e.message);
            }
        }
    }
    depositar(numero, valor) {
        try {
            let indice = this.consultarPorIndice(numero); //exceção      
            this._contas[indice].depositar(valor); //exceção
        }
        catch (e) {
            if (e instanceof aplicacaoErro_1.AplicacaoErro) {
                console.log(e.message);
            }
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
    renderJuros(numero) {
        try {
            let indice = this.consultarPorIndice(numero); //exceção
            if (this._contas[indice] instanceof contaPoupanca_1.Poupanca) {
                this._contas[indice].renderJuros();
            }
            else {
                console.log('A conta informada deve ser uma Poupança.'); //pode isso, Arnaldo?
            }
        }
        catch (e) {
            if (e instanceof aplicacaoErro_1.AplicacaoErro) {
                console.log(e.message);
            }
        }
    }
}
exports.Banco = Banco;
