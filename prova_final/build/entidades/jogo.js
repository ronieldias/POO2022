"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
const partida_1 = require("./partida");
const statusPartidaErro_1 = require("../excecoes/statusPartidaErro");
const partidaNaoEncontradaErro_1 = require("../excecoes/partidaNaoEncontradaErro");
const statusRodadaErro_1 = require("../excecoes/statusRodadaErro");
class Jogo {
    _id = 0;
    _partidaAtual; //Partida|Null
    _partidas = [];
    get getPartidaAtual() {
        return this._partidaAtual;
    }
    get partidas() {
        return this._partidas;
    }
    buscarPorIndice(id) {
        let indice = -1;
        for (let i = 0; i < this._partidas.length; i++) {
            if (id == this._partidas[i].getId) {
                indice = i;
            }
        }
        if (indice == -1) {
            throw new partidaNaoEncontradaErro_1.PartidaNaoEncontradaErro("Erro: Partida nao encontrada."); //exceção
        }
        return indice;
    }
    novaPartida(p1Nome, p2Nome) {
        if (this.getPartidaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: Partida em andamento.");
        }
        let partidaAux = new partida_1.Partida(p1Nome, p2Nome);
        this._partidas.push(partidaAux);
        this._id++;
    }
    novaRodada() {
        if (!this.getPartidaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: sem partidas no momento.");
        }
        if (!this.getPartidaAtual.getRodadaAtual) {
            throw new statusRodadaErro_1.StatusRodadaErro("Erro: sem rodadas no momento.");
        }
        this.getPartidaAtual.novaRodada();
        if (this.getPartidaAtual.calcularVencedor()) {
            this._partidas.push(this.getPartidaAtual);
            let aux;
            this._partidaAtual = aux;
        }
    }
    excluirPartida(id) {
        let indice = this.buscarPorIndice(id);
        for (let i = indice; i < this._partidas.length; i++) {
            this._partidas[i] = this._partidas[i + 1];
        }
        this._partidas.pop();
        this._id--;
    }
    anularPartidaAndamento() {
        if (!this._partidaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: nao há partidas em andamento");
        }
        let aux;
        this._partidaAtual = aux;
    }
    toStringPartidaEmAndamento() {
        return this.getPartidaAtual.toString();
    }
    partidasEncerradas() {
        return this._partidas;
    }
}
exports.Jogo = Jogo;
