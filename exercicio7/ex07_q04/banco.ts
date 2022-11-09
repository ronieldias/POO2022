import { Conta } from "./conta";
import { Poupanca } from "./contaPoupanca";

class Banco {
    private _contas: Conta[] = [];

    public get contas(): Array<any> {
        return this._contas;
    }

    public inserir(contaPassada: Conta): void {
        if (!this.consultar(contaPassada.numero)) {
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

    public consultarIndice(numero: String): number {
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

        if (indice != -1) {
            this._contas[indice] = c;
        }
    }

    public excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            for (let i: number = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    public depositar(numero: String, valor: number): void {
        let conta: Conta = this.consultar(numero);

        if (conta != null) {
            conta.saldo += valor;
        }
    }

    public sacar(numero: string, valor: number): void {
        let indice = this.consultarIndice(numero);

        if (indice != -1) {
            this._contas[indice].sacar(valor);
        }
    }

    public transferir(numeroCredito: String, numeroDebito: String, valor: number): void {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    public consultarSaldo(numero: String): number {
        let conta: Conta = this.consultar(numero);

        return conta.saldo;
    }

    public renderJuros(numero: string): void {
        let conta: Conta = this.consultar(numero);

        if (conta != null && conta instanceof Poupanca) {
            conta.renderJuros();
        }
    }
}

export { Banco }