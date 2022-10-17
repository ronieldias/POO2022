import { Conta } from "./ex06_q04";

class Banco {
    private _contas: Conta[] = [];

    public inserir(contaPassada: Conta): void {
        if (this.consultar(contaPassada.numero)) {
            console.log(`ERRO (BANCO INSERIR) - numero ${contaPassada.numero} já percente a uma conta existente\n`);
        } else {
            this._contas.push(contaPassada);
        }
    }

    public consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let c of this._contas) {
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    
    public alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numero);

        if(indice != -1){
            this._contas[indice] = c;
        }
    }

    public excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);

        if(indice != -1){
            for(let i: number = indice; i < this._contas.length; i++){
                this._contas[i] = this._contas[i+1];
            }
            this._contas.pop();
        }else{
            console.log('ERRO (BANCO ECLUIR) - conta inexistente');
        }
    }

    public depositar(numero: String, valor: number): void {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null){
            conta.saldo += valor;
        }else{
            console.log('ERRO (BANCO DEPOSITAR) - conta inexistente');
        }
    }

    public sacar(numero: String, valor: number): void {
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

    public consultarSaldo(numero: String): number {
        let conta: Conta = this.consultar(numero);

        return conta.saldo;
    }

    public transferir(numeroCredito: String, numeroDebito: String, valor: number): void {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);

        if(contaCredito!=null && contaDebito!=null){
           contaDebito.transferir(contaCredito, valor);
        }else{
            console.log('\nERRO (BANCO TRANSFERIR) - uma das contas passadas nao existe\n');
        }
    }

    public quantidadeContas(): number{
        return this._contas.length;
    }

    public totalDinheiroContas(): number{
        let total: number = 0;
        for (let i in this._contas){
            total += this._contas[i].saldo;
        }

        return total;
    }

    public mediaSaldoContas(): number{
        return this.totalDinheiroContas() / this.quantidadeContas();
    }
}

export { Banco }