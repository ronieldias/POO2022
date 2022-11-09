"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    _id;
    _descricao;
    _quantidadeEstoque;
    _valorUnitario;
    constructor(id, descricao, quantidade, valor) {
        this._id = id;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidade;
        this._valorUnitario = valor;
    }
    get getId() {
        return this._id;
    }
    get getDescricao() {
        return this._descricao;
    }
    get getValorUnitario() {
        return this._valorUnitario;
    }
    get getQuantidadeEstoque() {
        return this._quantidadeEstoque;
    }
    set setQuantidadeEstoque(valor) {
        this._quantidadeEstoque = valor;
    }
    repor(quantidade) {
        this.setQuantidadeEstoque = this.getQuantidadeEstoque + quantidade;
    }
    darBaixa(quantidade) {
        if (this.getQuantidadeEstoque >= quantidade) {
            this.setQuantidadeEstoque = this.getQuantidadeEstoque - quantidade;
        }
    }
}
exports.Produto = Produto;
