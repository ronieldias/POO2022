import { Partida } from "./partida";
import { StatusPartidaErro } from "../excecoes/statusPartidaErro";
import { PartidaNaoEncontradaErro } from "../excecoes/partidaNaoEncontradaErro";
import { StatusRodadaErro } from "../excecoes/statusRodadaErro";

class Jogo {
    private _id = 0;
    private _partidaAtual !: Partida; //Partida|Null
    private _partidas: Partida[] = [];
    
    public get getPartidaAtual(){
        return this._partidaAtual;
    }
    public get partidas(){
        return this._partidas;
    }

    private buscarPorIndice(id: number): number {
        let indice = -1;
        for (let i = 0; i < this._partidas.length; i++) {
            if (id == this._partidas[i].getId) {
                indice = i;
            }
        }
        if (indice == -1) {
            throw new PartidaNaoEncontradaErro("Erro: Partida nao encontrada."); //exceção
        }
        return indice;
    }

    public novaPartida(p1Nome: string, p2Nome: string) {
        if(this.getPartidaAtual){
            throw new StatusPartidaErro("Erro: Partida em andamento.")
        }
        let partidaAux: Partida = new Partida(p1Nome, p2Nome);
        this._partidas.push(partidaAux);
        this._id++;
    }

    public novaRodada(){
        if(!this.getPartidaAtual){
            throw new StatusPartidaErro("Erro: sem partidas no momento.")
        }
        if(!this.getPartidaAtual.getRodadaAtual){
            throw new StatusRodadaErro("Erro: sem rodadas no momento.");
        }
        this.getPartidaAtual.novaRodada();
        if(this.getPartidaAtual.calcularVencedor()){
            this._partidas.push(this.getPartidaAtual);
            let aux !: Partida;
            this._partidaAtual = aux;
        }
    }

    public excluirPartida(id: number) {
        let indice = this.buscarPorIndice(id);

        for (let i = indice; i < this._partidas.length; i++) {
            this._partidas[i] = this._partidas[i + 1];
        }
        this._partidas.pop();
        this._id--;
    }

    public anularPartidaAndamento(){
        if(!this._partidaAtual){
            throw new StatusPartidaErro("Erro: nao há partidas em andamento");
        }
        let aux !: Partida;
        this._partidaAtual = aux;
    }

    public toStringPartidaEmAndamento(): string {
        return this.getPartidaAtual.toString();
    }

    public partidasEncerradas(): Array<Partida> {
        return this._partidas;
    }
}

export { Jogo }