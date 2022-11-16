import { Conta } from "./conta";

class Poupanca extends Conta{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number){
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    public get taxaJuros(): number{
        return this._taxaJuros;
    }

    public renderJuros(): void{
        this.depositar(this.getSaldo * this.taxaJuros/100);
    }
}

export { Poupanca }