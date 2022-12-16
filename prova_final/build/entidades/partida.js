"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partida = void 0;
const statusPartidaErro_1 = require("../excecoes/statusPartidaErro");
const rodada_1 = require("./rodada");
//import { Elemento, Pedra, Papel, Tesoura } from "./elemento";
class Partida {
    _id = 1;
    _numRodada = 0;
    _nomeP1;
    _nomeP2;
    _pontuacaoP1 = 0;
    _pontuacaoP2 = 0;
    _vencedor = null;
    _rodadaAtual;
    _rodadas = [];
    constructor(p1, p2) {
        this._nomeP1 = p1;
        this._nomeP2 = p2;
    }
    get getId() {
        return this._id;
    }
    get getNumRodada() {
        return this._numRodada;
    }
    get getNomeP1() {
        return this._nomeP1;
    }
    get getNomeP2() {
        return this._nomeP2;
    }
    get getPontuacaoP1() {
        return this._pontuacaoP1;
    }
    get getPontuacaoP2() {
        return this._pontuacaoP2;
    }
    get getRodadaAtual() {
        return this._rodadaAtual;
    }
    novaRodada() {
        if (this.getRodadaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: ja há uma rodada em andamento.");
        }
        this._rodadaAtual = new rodada_1.Rodada(this.getNumRodada + 1);
    }
    jogar(jogador, escolha) {
        if (!this.getRodadaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: não há uma partida em andamento.");
        }
        if (this.getRodadaAtual.getEscolhaP1 && escolha == '1') {
            throw new statusPartidaErro_1.StatusPartidaErro(`Erro: o jogador ${this.getNomeP1} já jogou.`);
        }
        if (this.getRodadaAtual.getEscolhaP1 && escolha == '2') {
            throw new statusPartidaErro_1.StatusPartidaErro(`Erro: o jogador ${this.getNomeP2} já jogou.`);
        }
        //console.log('OK1');
        let elementoAux;
        switch (escolha) {
            case '1':
                elementoAux = new Pedra("pedra");
                break;
            case '2':
                elementoAux = new Papel("papel");
                break;
            case '3':
                elementoAux = new Tesoura("tesoura");
                break;
        }
        if (jogador == 1) {
            this.getRodadaAtual.setEscolhaP1 = elementoAux;
        }
        else {
            this.getRodadaAtual.setEscolhaP2 = elementoAux;
        }
        if (this.getRodadaAtual.getEscolhaP1 && this.getRodadaAtual.getEscolhaP2) {
            this.getRodadaAtual.iniciar();
            this._pontuacaoP1 += this.getRodadaAtual.getPontoP1;
            this._pontuacaoP2 += this.getRodadaAtual.getPontoP2;
            this._rodadas.push(this.getRodadaAtual);
            let aux;
            this._rodadaAtual = aux; //esvazia
            this._numRodada++;
        }
    }
    calcularVencedor() {
        if (this.getPontuacaoP1 < 3 && this.getPontuacaoP2 < 3) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: partida nao encerrada\nRegras(A partida só encerra quando um dos jogadores atinge 3pts.)");
        }
        if (this._pontuacaoP1 > this._pontuacaoP2) {
            return this.getNomeP1;
        }
        else {
            return this.getNomeP2;
        }
    }
    //retorna status da partida
    toString() {
        if (!this.getRodadaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: não há uma partida em andamento.");
        }
        return (`Partida ${this.getId}\n 
                ${this.getNomeP1.toUpperCase()} [${this.getPontuacaoP1}] vs [${this.getPontuacaoP2}] ${this.getNomeP2.toUpperCase()}`);
    }
    //retorna status da partida + rodadas
    toStringDetalhado() {
        if (!this.getRodadaAtual) {
            throw new statusPartidaErro_1.StatusPartidaErro("Erro: não há uma partida em andamento.");
        }
        let partidas = '';
        for (let i = 0; i < this.getNumRodada; i++) {
            partidas += this._rodadas[i].toString();
            partidas += '\n';
        }
        return (`Partida ${this.getId}\n 
                ${this.getNomeP1.toUpperCase()} [${this.getPontuacaoP1}] vs [${this.getPontuacaoP2}] ${this.getNomeP2.toUpperCase()}
                ${partidas}`);
    }
    /*public vezDeNome(): string{
        console.log(typeof this.getRodadaAtual.vezDeNumero());
        
        if(this.getRodadaAtual.vezDeNumero() == 1){
            return `Vez de ${this.getNomeP1}`;
        }else if(this.getRodadaAtual.vezDeNumero() == 2){
            return `Vez de ${this.getNomeP2}`;
        }else if(this.getRodadaAtual.vezDeNumero() == 3){
            return `Ambos já jogaram`;
        }
        return `Ninguem jogouu. Soteio aleatorio`;
    }*/
    vezDeNome() {
        console.log(typeof this.getRodadaAtual.vezDeNumero());
        if (this.getRodadaAtual.vezDeNumero() == 1) {
            return `Vez de ${this.getNomeP1}`;
        }
        else if (this.getRodadaAtual.vezDeNumero() == 2) {
            return `Vez de ${this.getNomeP2}`;
        }
        else if (this.getRodadaAtual.vezDeNumero() == 3) {
            return `Ambos já jogaram`;
        }
        return `Ninguem jogouu. Soteio aleatorio`;
    }
}
exports.Partida = Partida;
let p = new Partida('andra', 'garfo');
p.novaRodada();
//p.vezDeNome();
