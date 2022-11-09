class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor: number): void {
        if(this.saldo < valor){
            throw new Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
    }
}

export { Conta }

let c : Conta = new Conta('001', 2500.50);
c.sacar(2000);
console.log(c.saldo);
c.sacar(1000);
console.log(c.saldo);