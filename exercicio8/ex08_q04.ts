/*
    Quando o método transferir() chama o método sacar() e neste é lançada uma exceção,
    assim como as linhas de código restantes no método sacar() não são executadas, o 
    mesmo também ocorre para as linhas restantes do método transferir(), logo não houve 
    a conclusão do saque e nem do déposito.
*/

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
    set saldo(valor: number){
        this._saldo += valor;
    }

    sacar(valor: number): void {
        if(this.saldo < valor){
            throw new Error('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void{
        this.saldo = this.saldo + valor;
    }

    transferir(conta: Conta, valor: number): void{
        conta.sacar(valor);
        conta.depositar(valor);
    }
}

export { Conta }

let c1 : Conta = new Conta('001', 2500);
let c2 : Conta = new Conta('002', 100);

console.log(c1.saldo);
c1.transferir(c2, 3000);
console.log(c1.saldo);