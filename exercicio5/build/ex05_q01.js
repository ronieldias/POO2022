"use strict";
exports.__esModule = true;
exports.Banco = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            console.log('\nERRO (CONTA TRANSFERIR) - saldo insuficiente\n');
        }
        return false;
    };
    return Conta;
}());
exports.Conta = Conta;
/*
let c1: Conta = new Conta('1', 100);
let c2: Conta = new Conta('2', 200);
let c3: Conta = new Conta('3', 300);
let c4: Conta = new Conta('3', 150);
*/
//***********************************************************************************************
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (contaPassada) {
        if (this.consultar(contaPassada.numero)) {
            console.log("ERRO (BANCO INSERIR) - numero ".concat(contaPassada.numero, " j\u00E1 percente a uma conta existente\n"));
        }
        else {
            this.contas.push(contaPassada);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (c) {
        var indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this.contas[indice] = c;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
        else {
            console.log('ERRO (BANCO ECLUIR) - conta inexistente');
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.saldo += valor;
        }
        else {
            console.log('ERRO (BANCO DEPOSITAR) - conta inexistente');
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
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
    };
    Banco.prototype.consultarSaldo = function (numero) {
        var conta = this.consultar(numero);
        return conta.saldo;
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
        else {
            console.log('\nERRO (BANCO TRANSFERIR) - uma das contas passadas nao existe\n');
        }
    };
    Banco.prototype.quantidadeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.totalDinheiroContas = function () {
        var total = 0;
        for (var i in this.contas) {
            total += this.contas[i].saldo;
        }
        return total;
    };
    Banco.prototype.mediaSaldoContas = function () {
        return this.totalDinheiroContas() / this.quantidadeContas();
    };
    return Banco;
}());
exports.Banco = Banco;
