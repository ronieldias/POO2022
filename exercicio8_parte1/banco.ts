import { Conta } from "./conta";

class Banco {
    private _contas: Conta[] = []; 
    
    public inserir(conta:Conta): void {
        let contaConsultada = this.consultar(conta.getNumero); 
        
        if(contaConsultada == null) {
            this._contas.push(conta);
        }  
    }
    
    public consultar(numero: String): Conta {
        let contaConsultada!: Conta; 
        
        for(let conta of this._contas){
            if (conta.getNumero == numero){ 
                contaConsultada = conta; 
                break; 
            } 
        }
        return contaConsultada;
    } 
    
    private consultarPorIndice(numero: String): number {
        let indice: number = -1;
        
        for(let i: number = 0; i < this._contas.length; i++){
            if (this._contas[i].getNumero == numero){
                indice = i; 
                break;
            }
        }
        return indice;
    }
    
    public alterar(conta: Conta): void {
        let indice: number = this.consultarPorIndice(conta.getNumero); 
        
        if(indice != -1){
            this._contas[indice] = conta;
        }
    }

    public excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        if(indice != -1){
            for (let i: number = indice; i < this._contas.length; i++){
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    } 
    
    public depositar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);
        
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    }

    public sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if(contaConsultada != null){
            contaConsultada.sacar(valor);
        }  
    }
    
    public transferir(numeroDebito: string, numeroCredito: string, valor: number) {
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito); 

        if (contaCredito != null && contaDebito !=null){
            contaDebito.transferir(contaCredito, valor);
        }
    }
}

export { Banco }