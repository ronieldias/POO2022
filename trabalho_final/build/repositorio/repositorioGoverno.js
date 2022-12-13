"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioGoverno = void 0;
const repositorioHistorico_1 = require("./repositorioHistorico");
class RepositorioGoverno extends repositorioHistorico_1.RepositorioHistorico {
    excluirVeiculo(id) {
        let indice = this.consultarIndiceVeiculo(id);
        for (let i = indice; i < this._veiculos.length; i++) {
            this._veiculos[i] = this._veiculos[i + 1];
        }
        this._veiculos.pop();
    }
    excluirTodos() {
        this._veiculos = [];
    }
}
exports.RepositorioGoverno = RepositorioGoverno;
