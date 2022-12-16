import { RodadaExcedidaErro } from "../excecoes/rodadaExcedidaErro";
//import { Elemento, Pedra, Papel, Tesoura } from "./elemento";

class Rodada{
    private _id: number;
    private _escolhaP1 !: Elemento;
    private _escolhaP2 !: Elemento;
    private _pontoP1: number = 0;
    private _pontoP2: number = 0;

    constructor(id: number){    
        this._id = id;
    }

    public get getNumRodada(){
        return this._id;
    }
    public get getEscolhaP1(){
        return this._escolhaP1;
    }
    public set setEscolhaP1(e: Elemento){
        this._escolhaP1 = e;
    }
    public get getEscolhaP2(){
        return this._escolhaP2;
    }
    public set setEscolhaP2(e: Elemento){
        this._escolhaP2 = e;
    }
    public get getPontoP1(){
        return this._pontoP1;
    }
    private set setPontoP1(p: number){
        this._pontoP1 = p;
    }
    public get getPontoP2(){
        return this._pontoP2;
    }
    private set setPontoP2(p: number){
        this._pontoP2 = p;
    }

    public iniciar(): void{
        console.log(this.getEscolhaP1.getNome, this.getEscolhaP2.getNome);
        console.log(this.getEscolhaP1.combate(this._escolhaP2));
        
        if(this.getEscolhaP1.combate(this._escolhaP2) == -1){
            this.setPontoP2 = this.getPontoP2 + 1;
        }else if(this._escolhaP1.combate(this._escolhaP2) == 1){
            this.setPontoP1 = this.getPontoP1 + 1;
        }else if(this._escolhaP1.combate(this._escolhaP2) == 0){
            this.setPontoP1 = this.getPontoP1 + 0;
            this.setPontoP2 = this.getPontoP2 + 0;
            
        }
    }

    public resultado(): string{
        if(this.getEscolhaP1.combate(this._escolhaP2) == -1){
            return 'Player 2'
        }else if(this._escolhaP1.combate(this._escolhaP2) == 1){
            return 'Player 1'
        }{
            return 'Empate'
        }
    }

    public toString(): string{
        return(`Rodada: ${this.getNumRodada}\nEscolha P1 ${this.getEscolhaP1.getNome}\nEscolha P2: ${this.getEscolhaP2.getNome}\nPontos P1: ${this.getPontoP1}\nPontos P2: ${this.getPontoP2}\n`);
    }

    public vezDeNumero(): number{
        if(!this._escolhaP1 && this._escolhaP2){ //vez de p1
            return 1;
        }else if(!this._escolhaP1 && this._escolhaP2){ //vez de p2
            return 2;
        }else if(this._escolhaP1 && !this._escolhaP2){ //ambos jogaram
            return 3;
        }
        return 0; //nenhum jogou
    }
}

export { Rodada }

let r : Rodada = new Rodada(1);
console.log(r.vezDeNumero()); 

let pedra : Elemento = new Pedra('pedra');
let papel : Elemento = new Papel('papel');
let tesoura: Elemento = new Tesoura('tesoura');