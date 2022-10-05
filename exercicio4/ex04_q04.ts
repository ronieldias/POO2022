/*
a) O resultado dos três prints serão 90, 90 e 90. Pois todas as variáveis estão apontando
para o mesmo objeto:
c1 -> c2
c3 -> c1 que aponta pra c2
b) É deletado automaticamente por um serviço de coleta de lixo que frequentemente percorre a 
memória e exclui objetos sem referência.
*/


class Conta{
    numero: string;
    saldo: number;
 
    constructor(numero: string, saldo: number){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);
let c3: Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferir(c2,50); //transferindo para si mesmo
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());