/*
    - Sim, o lançamento da exceção de conta.sacar() foi propagado para conta.transferir(),
    se este fosse chamado, a exceção seria lançada em tela.
    - Entretanto, não houve propagação da exceção para banco.transfeir(), apenas dos seus efeitos, 
    pois os dados continuam consistentes. A execução de banco.transferir() nunca transferirá um valor 
    maior do que o saldo disponível na conta mas, por fim, a exceção não é lançada em tela. 
    - É uma implementação que mantém a consistencia dos dados, mas pode soar como inconfiável por nao
    saber-mos ao certo o que aconteceu. 
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
    get numero(){
        return this._numero;
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

class Banco {
    private _contas: Conta[] = []; 
    
    inserir(conta:Conta): void {
        let contaConsultada = this.consultar(conta.numero); 
        
        if(contaConsultada == null) {
            this._contas.push(conta);
        }  
    }
    
    consultar(numero: String): Conta {
        let contaConsultada!: Conta; 
        
        for(let conta of this._contas){
            if (conta.numero == numero){ 
                contaConsultada = conta; 
                break; 
            } 
        }
        return contaConsultada;
    } 
    
    private consultarPorIndice(numero: String): number {
        let indice: number = -1;
        
        for(let i: number = 0; i < this._contas.length; i++){
            if (this._contas[i].numero == numero){
                indice = i; 
                break;
            }
        }
        return indice;
    }
    
    alterar(conta: Conta): void {
        let indice: number = this.consultarPorIndice(conta.numero); 
        
        if(indice != -1){
            this._contas[indice] = conta;
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        if(indice != -1){
            for (let i: number = indice; i < this._contas.length; i++){
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    } 
    
    depositar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);
        
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    }

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if(contaConsultada != null){
            contaConsultada.sacar(valor);
        }  
    }
    
    transferir(numeroDebito: string, numeroCredito: string, valor: number) {
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito); 

        if (contaCredito != null && contaDebito !=null){
            contaDebito.transferir(contaCredito, valor);
        }
    }
}

export { Conta, Banco }

let conta1 : Conta = new Conta("001", 199);
let conta2 : Conta = new Conta("002", 200);

let banco : Banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);
banco.transferir("001", "002", 200);

console.log(conta1.saldo);
console.log(conta2.saldo);

banco.sacar('002', 201);