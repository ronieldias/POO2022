class Contaa{
    numero: string;
    saldo: number;
 
    constructor(numero: string, saldo: number){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if(this.saldo - valor >= 0){
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if(this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}

let conta1 : Contaa = new Contaa('1', 100);
let conta2: Contaa = new Contaa('2', 200);

console.log(`############# CONTA ${conta1.numero} #############`);
console.log(conta1);
console.log(`Conta ${conta1.numero} sacou 50,00 |${conta1.sacar(50)}|`); //sacou? true
console.log(conta1);
console.log(`Conta ${conta1.numero} sacou 51,00 |${conta1.sacar(51)}|`); // sacou? false
console.log(conta1);

console.log(`\n############# CONTA ${conta2.numero} #############`);
console.log(conta2);
console.log(`Conta ${conta2.numero} transferiu 100,00 |${conta2.transferir(conta1, 100)}|`);
console.log(conta2);
console.log(`Conta ${conta2.numero} transferiu 101,00 |${conta2.transferir(conta1, 101)}`); // sacou? false
console.log(conta1);
