"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
const produtoPerecivel_1 = require("./produtoPerecivel");
class Estoque {
    _produtos = [];
    inserir(produtoPassado) {
        if (!this.consultar(produtoPassado.getId)) {
            this._produtos.push(produtoPassado);
        }
    }
    consultar(idPassado) {
        let produtoProcurado;
        for (let p of this._produtos) {
            if (p.getId == idPassado) {
                produtoProcurado = p;
                break;
            }
        }
        return produtoProcurado;
    }
    excluir(idPassado) {
        for (let i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].getId == idPassado) {
                for (let j = i; j < this._produtos.length; j++) {
                    this._produtos[j] = this._produtos[j + 1];
                }
                break;
            }
        }
        this._produtos.pop();
    }
    repor(idPassado, quantidade) {
        let produtoProcurado = this.consultar(idPassado);
        if (produtoProcurado != null) {
            produtoProcurado.repor(quantidade);
        }
    }
    darBaixa(idPassado, quantidade) {
        let produtoProcurado = this.consultar(idPassado);
        if (produtoProcurado != null) {
            produtoProcurado.darBaixa(quantidade);
        }
    }
    pereciveisVencidos() {
        let produtosVencidos = [];
        for (let p of this._produtos) {
            if (p instanceof produtoPerecivel_1.ProdutoPerecivel) {
                if (!p.estaValido()) {
                    produtosVencidos.push(p);
                }
            }
        }
        return produtosVencidos;
    }
}
exports.Estoque = Estoque;
