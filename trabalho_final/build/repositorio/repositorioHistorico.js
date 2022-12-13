"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioHistorico = void 0;
class RepositorioHistorico {
    _veiculos = [];
    inserirVeiculo(veiculo) {
        this._veiculos.push(veiculo);
    }
    inserirNveiculos(veiculos) {
        for (let i = 0; i < veiculos.length; i++) {
            this._veiculos.push(veiculos[i]);
        }
    }
    consultarIndiceVeiculo(id) {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (id == this._veiculos[i].getId) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    consultarVeiculo(id) {
        return this._veiculos[this.consultarIndiceVeiculo(id)];
    }
    consultarPlaca(placa) {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (placa == this._veiculos[i].getPlaca) {
                indice = i;
                break;
            }
        }
        return this._veiculos[indice];
    }
    retornaTodos() {
        return this._veiculos;
    }
}
exports.RepositorioHistorico = RepositorioHistorico;
