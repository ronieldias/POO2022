class Conta{
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
        }else{
            console.log('\nERRO (CONTA TRANSFERIR) - saldo insuficiente\n');
        }
        return false;
    }
}
/*
let c1: Conta = new Conta('1', 100);
let c2: Conta = new Conta('2', 200);
let c3: Conta = new Conta('3', 300);
let c4: Conta = new Conta('3', 150);
*/
//***********************************************************************************************

class Banco {
    contas: Conta[] = [];

    inserir(contaPassada: Conta): void {
        if (this.consultar(contaPassada.numero)) {
            console.log(`ERRO (BANCO INSERIR) - numero ${contaPassada.numero} já percente a uma conta existente\n`);
        } else {
            this.contas.push(contaPassada);
        }
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this.contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    
    alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numero);

        if(indice != -1){
            this.contas[indice] = c;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);

        if(indice != -1){
            for(let i: number = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i+1];
            }
            this.contas.pop();
        }else{
            console.log('ERRO (BANCO ECLUIR) - conta inexistente');
        }
    }

    depositar(numero: String, valor: number): void {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null){
            conta.saldo += valor;
        }else{
            console.log('ERRO (BANCO DEPOSITAR) - conta inexistente');
        }
    }

    sacar(numero: String, valor: number): void {
        let conta: Conta = this.consultar(numero);

        if (conta != null){
            if(conta.saldo-valor >= 0){
                conta.saldo -= valor;
            }else{
                console.log('ERRO (BANCO SACAR) - saldo insuficiente');
                
            }
        }else{
            console.log('ERRO (BANCO SACAR) - conta inexistente');
            
        }
    }

    consultarSaldo(numero: String): number {
        let conta: Conta = this.consultar(numero);

        return conta.saldo;
    }

    transferir(numeroCredito: String, numeroDebito: String, valor: number): void {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);

        if(contaCredito!=null && contaDebito!=null){
           contaDebito.transferir(contaCredito, valor);
        }else{
            console.log('\nERRO (BANCO TRANSFERIR) - uma das contas passadas nao existe\n');
        }
    }

    quantidadeContas(): number{
        return this.contas.length;
    }

    totalDinheiroContas(): number{
        let total: number = 0;
        for (let i in this.contas){
            total += this.contas[i].saldo;
        }

        return total;
    }

    mediaSaldoContas(): number{
        return this.totalDinheiroContas() / this.quantidadeContas();
    }
}

/*
let b: Banco = new Banco();
b.inserir(c1);
b.inserir(c2);
b.inserir(c3);

console.log(b);

console.log(b.mediaSaldoContas());


let b: Banco = new Banco();
b.inserir(new Conta("1", 100));
b.inserir(new Conta("2", 200));
console.log(b.consultar("2").saldo); //200
console.log(b.consultarIndice("1")); //0
let c2 = new Conta("2", 300);
b.alterar(c2);
console.log(b.consultar("2").saldo); //300
b.inserir(new Conta("3", 300));
b.excluir("1");
console.log(b.consultarIndice("3")); //1
b.depositar("3", 100);
console.log(b.consultar("3").saldo); //400
*/


export{Conta, Banco}
