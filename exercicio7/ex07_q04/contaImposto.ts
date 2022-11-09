import { Conta } from "./conta";

class ContaImposto extends Conta {
    private _taxaDeDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }
    
    public get taxaDesconto(): number{
        return this._taxaDeDesconto;
    }
    
    public sacar(valor: number): boolean {
       let valorTotal = valor + valor*this._taxaDeDesconto/100;
       return super.sacar(valorTotal);
    }
}

export { ContaImposto }
