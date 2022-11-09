class Conta{
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number){
        this._numero = numero;
        this._saldo = saldo;
    }

    public get numero(): string{
        return this._numero;
    }
    public set numero(valor: string){
        this._numero = valor;
    }

    public get saldo(): number{
        return this._saldo;
    }
    public set saldo(valor: number){
        this._saldo = valor;
    }

    public sacar(valor: number): boolean {
        if(this.saldo - valor >= 0){
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }

    public depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    public transferir(contaDestino: Conta, valor: number): boolean {
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}

export { Conta }