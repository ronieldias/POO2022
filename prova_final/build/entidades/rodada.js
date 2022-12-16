"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rodada = void 0;
//import { Elemento, Pedra, Papel, Tesoura } from "./elemento";
class Rodada {
    _id;
    _escolhaP1;
    _escolhaP2;
    _pontoP1 = 0;
    _pontoP2 = 0;
    constructor(id) {
        this._id = id;
    }
    get getNumRodada() {
        return this._id;
    }
    get getEscolhaP1() {
        return this._escolhaP1;
    }
    set setEscolhaP1(e) {
        this._escolhaP1 = e;
    }
    get getEscolhaP2() {
        return this._escolhaP2;
    }
    set setEscolhaP2(e) {
        this._escolhaP2 = e;
    }
    get getPontoP1() {
        return this._pontoP1;
    }
    set setPontoP1(p) {
        this._pontoP1 = p;
    }
    get getPontoP2() {
        return this._pontoP2;
    }
    set setPontoP2(p) {
        this._pontoP2 = p;
    }
    iniciar() {
        console.log(this.getEscolhaP1.getNome, this.getEscolhaP2.getNome);
        console.log(this.getEscolhaP1.combate(this._escolhaP2));
        if (this.getEscolhaP1.combate(this._escolhaP2) == -1) {
            this.setPontoP2 = this.getPontoP2 + 1;
        }
        else if (this._escolhaP1.combate(this._escolhaP2) == 1) {
            this.setPontoP1 = this.getPontoP1 + 1;
        }
        else if (this._escolhaP1.combate(this._escolhaP2) == 0) {
            this.setPontoP1 = this.getPontoP1 + 0;
            this.setPontoP2 = this.getPontoP2 + 0;
        }
    }
    resultado() {
        if (this.getEscolhaP1.combate(this._escolhaP2) == -1) {
            return 'Player 2';
        }
        else if (this._escolhaP1.combate(this._escolhaP2) == 1) {
            return 'Player 1';
        }
        {
            return 'Empate';
        }
    }
    toString() {
        return (`Rodada: ${this.getNumRodada}\nEscolha P1 ${this.getEscolhaP1.getNome}\nEscolha P2: ${this.getEscolhaP2.getNome}\nPontos P1: ${this.getPontoP1}\nPontos P2: ${this.getPontoP2}\n`);
    }
    vezDeNumero() {
        if (!this._escolhaP1 && this._escolhaP2) { //vez de p1
            return 1;
        }
        else if (!this._escolhaP1 && this._escolhaP2) { //vez de p2
            return 2;
        }
        else if (this._escolhaP1 && !this._escolhaP2) { //ambos jogaram
            return 3;
        }
        return 0; //nenhum jogou
    }
}
exports.Rodada = Rodada;
let r = new Rodada(1);
console.log(r.vezDeNumero());
let pedra = new Pedra('pedra');
let papel = new Papel('papel');
let tesoura = new Tesoura('tesoura');
