"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = void 0;
const conta_1 = require("./conta");
class ContaImposto extends conta_1.Conta {
    _taxaDeDesconto;
    constructor(numero, saldo, taxaDeDesconto) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }
    get taxaDesconto() {
        return this._taxaDeDesconto;
    }
    sacar(valor) {
        let valorTotal = valor + valor * this._taxaDeDesconto / 100;
        super.sacar(valorTotal); //antes era retorno
    }
}
exports.ContaImposto = ContaImposto;
