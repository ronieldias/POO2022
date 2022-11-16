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
        try {
            if (indice == -1) {
                throw new contaInexistenteErro_1.ContaInexistenteErro('Conta inexistente'); //possivel exceção
            }
        }
        catch (e) {
            console.log(e.message);
        }
        finally {
            return indice;
        }
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
        finally {
            return contaConsultada;
        }
    }
    inserir(conta) {
        if (!this.contaExiste(conta.getNumero)) {
            this._contas.push(conta);
        }
    }
    alterar(conta) {
        let indice = this.consultarPorIndice(conta.getNumero); //exceção
        if (indice != -1) { //gambiarra
            this._contas[indice] = conta; //se a conta nao existe, nao era pra alterar, ta doido?? loucuragem demais
        }
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero); //exceção
        for (let i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    }
    depositar(numero, valor) {
        try {
            let indice = this.consultarPorIndice(numero); //exceção        
            this._contas[indice].depositar(valor);
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
        /*
            let indice :number = this.consultarPorIndice(numero);

            if(this._contas[indice] instanceof Poupanca){
                (<Poupanca> this._contas[indice]).renderJuros();
            }
        */
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
