class SituacaoFinanceira{
    valorCreditos: number;
    valorDebitos: number;

    constructor(valorCreditos: number, valorDebitos: number){
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo(): number{
        return this.valorCreditos - this.valorDebitos;
    }
}

let sf1 : SituacaoFinanceira;
sf1 = new SituacaoFinanceira(100, 50);
console.log(sf1.saldo());

let sf2 : SituacaoFinanceira;
sf2 = new SituacaoFinanceira(100, 110);
console.log(sf2.saldo());