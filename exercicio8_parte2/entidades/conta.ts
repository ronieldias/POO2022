class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
        if(saldoInicial < 0){
            throw new Error('O saldo inicial não pode ser negativo');
        }
        this._numero = numero;
        this._saldo = saldoInicial;
    }

    get getSaldo() {
        return this._saldo;
    }
    set setSaldo(valor: number){
        this._saldo = valor;
    }
    get getNumero(){
        return this._numero;
    }

    public sacar(valor: number): void {
        if(valor < 0){
            throw new Error('Nao é possível sacar valores negativos');
        }
        if(this.getSaldo < valor){
            throw new Error('Saldo insuficiente');
        }
        this.setSaldo = this.getSaldo - valor;
    }

    public depositar(valor: number): void{
        if(valor < 0){
            throw new Error('Não é possivel depositar valores negativos');
        }
        this.setSaldo = this.getSaldo + valor;
    }

    public transferir(conta: Conta, valor: number): void{
        this.sacar(valor);
        conta.depositar(valor);
    }
}

export { Conta }