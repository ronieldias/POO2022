import { AplicacaoErro } from "../excecoes/aplicacaoErro";
import { Conta } from "./conta";
import { ContaInexistenteErro } from "../excecoes/contaInexistenteErro"
import { Poupanca } from "./contaPoupanca";

class Banco {
    private _contas: Conta[] = [];

    // *** metodos auxiliares ***

    public contaExiste(numero: string): boolean { //USAR CONSULTAR POR INDICE
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].getNumero == numero) {
                return true;
            }
        }
        return false;
    }

    private consultarPorIndice(numero: String): number { //OK
        let indice: number = -1;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].getNumero == numero) {
                indice = i;
                break;
            }
        }

        try {
            if (indice == -1) {
                throw new ContaInexistenteErro('Conta inexistente'); //possivel exceção
            }
        } catch (e: any) {
            console.log(e.message);
        } finally {
            return indice;
        }
    }

    // *** demais métodos ***

    public consultar(numero: string): Conta { //OK
        let contaConsultada!: Conta;

        try {
            let indice = this.consultarPorIndice(numero); //possivel exceção
            contaConsultada = this._contas[indice]
        } catch (e: any) {
            console.log(e.message);
        } finally {
            return contaConsultada;
        }
    }

    public inserir(conta: Conta): void { //OK
        if (!this.contaExiste(conta.getNumero)) {
            this._contas.push(conta);
        }
    }

    public alterar(conta: Conta): void { //OK?
        let indice: number = this.consultarPorIndice(conta.getNumero); //exceção
        if (indice != -1) { //gambiarra
            this._contas[indice] = conta; //se a conta nao existe, nao era pra alterar, ta doido?? loucuragem demais
        }

    }

    public excluir(numero: string): void { //OK
        let indice: number = this.consultarPorIndice(numero); //exceção

        for (let i: number = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    }

    public depositar(numero: string, valor: number): void {
        try {
            let indice: number = this.consultarPorIndice(numero); //exceção        
            this._contas[indice].depositar(valor);
        } catch(e: any) {
            if(e instanceof AplicacaoErro){
                console.log(e.message);
            }
        }
    }

    public sacar(numero: string, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    public transferir(numeroDebito: string, numeroCredito: string, valor: number) {
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    public renderJuros(numero: string): void{ //OK?
        /*
            let indice :number = this.consultarPorIndice(numero);

            if(this._contas[indice] instanceof Poupanca){
                (<Poupanca> this._contas[indice]).renderJuros(); 
            }
        */
        try{
            let indice :number = this.consultarPorIndice(numero); //exceção
            if(this._contas[indice] instanceof Poupanca){
                (<Poupanca> this._contas[indice]).renderJuros(); 
            }else{
                console.log('A conta informada deve ser uma Poupança.'); //pode isso, Arnaldo?
            }
        }catch(e: any){
            if(e instanceof AplicacaoErro){
                console.log(e.message);
            }
        }
    }
}

export { Banco }