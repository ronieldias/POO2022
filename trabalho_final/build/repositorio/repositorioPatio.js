"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioPatio = void 0;
const repositorioGoverno_1 = require("./repositorioGoverno");
class RepositorioPatio extends repositorioGoverno_1.RepositorioGoverno {
    atualizarVeiculo(id, novoVeiculo) {
        let indice = this.consultarIndiceVeiculo(id);
        this._veiculos[indice] = novoVeiculo;
    }
}
exports.RepositorioPatio = RepositorioPatio;
