class Conta{
    private _numero: string;
    private _saldo: number;
 
    constructor(numero: string, saldo: number){
        this._numero = numero;
        this._saldo = saldo;
    }

    //getters e setters
    public get numero(): string{
        return this._numero;
    }
    public set numero(n: string){
        this._numero = n;
    }

    public get saldo(): number{
        return this._saldo;
    }
    public set saldo(s: number){
        this._saldo = s;
    }

    //***
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

    /* INUTILIZADA PELA IMPLEMENTAÇÃO DO GET
    public consultarSaldo(): number {
        return this.saldo;
    }
    */

    public transferir(contaDestino: Conta, valor: number): boolean {
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }else{
            console.log('\nERRO (CONTA TRANSFERIR) - saldo insuficiente\n');
        }
        return false;
    }
}

export { Conta }