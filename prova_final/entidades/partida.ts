import { RodadaExcedidaErro } from "../excecoes/rodadaExcedidaErro";
import { StatusPartidaErro } from "../excecoes/statusPartidaErro";
import { Rodada } from "./rodada";
//import { Elemento, Pedra, Papel, Tesoura } from "./elemento";

class Partida {
    private _id: number = 1;
    private _numRodada: number = 0;
    private _nomeP1: string;
    private _nomeP2: string;
    private _pontuacaoP1: number = 0
    private _pontuacaoP2: number = 0
    private _vencedor = null;
    private _rodadaAtual !: Rodada;
    private _rodadas: Rodada[] = [];

    constructor(p1: string, p2: string) {
        this._nomeP1 = p1;
        this._nomeP2 = p2;
    }

    public get getId() {
        return this._id;
    }
    public get getNumRodada() {
        return this._numRodada;
    }
    public get getNomeP1() {
        return this._nomeP1;
    }
    public get getNomeP2() {
        return this._nomeP2;
    }
    public get getPontuacaoP1() {
        return this._pontuacaoP1;
    }
    public get getPontuacaoP2() {
        return this._pontuacaoP2;
    }
    public get getRodadaAtual() {
        return this._rodadaAtual;
    }

    public novaRodada(): void {
        if (this.getRodadaAtual) {
            throw new StatusPartidaErro("Erro: ja há uma rodada em andamento.");
        }
        this._rodadaAtual = new Rodada(this.getNumRodada + 1);
    }

    public jogar(jogador: number, escolha: string) {
        if (!this.getRodadaAtual) {
            throw new StatusPartidaErro("Erro: não há uma partida em andamento.");
        }
        if (this.getRodadaAtual.getEscolhaP1 && escolha == '1') {
            throw new StatusPartidaErro(`Erro: o jogador ${this.getNomeP1} já jogou.`);
        }
        if (this.getRodadaAtual.getEscolhaP1 && escolha == '2') {
            throw new StatusPartidaErro(`Erro: o jogador ${this.getNomeP2} já jogou.`);
        }
        //console.log('OK1');
        let elementoAux !: Elemento;
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
        } else {
            this.getRodadaAtual.setEscolhaP2 = elementoAux;
        }

        if (this.getRodadaAtual.getEscolhaP1 && this.getRodadaAtual.getEscolhaP2) {
            this.getRodadaAtual.iniciar();
            this._pontuacaoP1 += this.getRodadaAtual.getPontoP1;
            this._pontuacaoP2 += this.getRodadaAtual.getPontoP2;
            this._rodadas.push(this.getRodadaAtual);
            let aux !: Rodada;
            this._rodadaAtual = aux; //esvazia
            this._numRodada++;
        }
    }

    public calcularVencedor(): string {
        if (this.getPontuacaoP1 < 3 && this.getPontuacaoP2 < 3) {
            throw new StatusPartidaErro("Erro: partida nao encerrada\nRegras(A partida só encerra quando um dos jogadores atinge 3pts.)");
        }
        if (this._pontuacaoP1 > this._pontuacaoP2) {
            return this.getNomeP1;
        } else {
            return this.getNomeP2;
        }
    }

    //retorna status da partida
    public toString(): string {
        if(!this.getRodadaAtual){
            throw new StatusPartidaErro("Erro: não há uma partida em andamento.");
        }
        return (`Partida ${this.getId}\n 
                ${this.getNomeP1.toUpperCase()} [${this.getPontuacaoP1}] vs [${this.getPontuacaoP2}] ${this.getNomeP2.toUpperCase()}`);
    }

    //retorna status da partida + rodadas
    public toStringDetalhado(): string {
        if(!this.getRodadaAtual){
            throw new StatusPartidaErro("Erro: não há uma partida em andamento.");
        }
        let partidas: string = '';
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
    public vezDeNome(): string{
        console.log(typeof this.getRodadaAtual.vezDeNumero());
        
        if(this.getRodadaAtual.vezDeNumero() == 1){
            return `Vez de ${this.getNomeP1}`;
        }else if(this.getRodadaAtual.vezDeNumero() == 2){
            return `Vez de ${this.getNomeP2}`;
        }else if(this.getRodadaAtual.vezDeNumero() == 3){
            return `Ambos já jogaram`;
        }
        return `Ninguem jogouu. Soteio aleatorio`;
    }
}

export { Partida }

let p: Partida = new Partida('andra', 'garfo');
p.novaRodada()
//p.vezDeNome();