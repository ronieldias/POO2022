import { AplicacaoErro } from "../excecoes/aplicacaoErro";
import { ValorInvalidoErro } from "../excecoes/valorInvalidoErro";
class Conta {
    private _numero: string;
    private _saldo: number = 0;

    constructor(numero: string, saldoInicial: number = 0) {
        this._numero = numero;
        //this.validarValor(saldoInicial);
        //this._saldo = saldoInicial;
        try {
            this.depositar(saldoInicial);
        } catch (e: any) {
            if (e instanceof AplicacaoErro) {
                console.log(e.message);
            }
        }
    }

    get getSaldo(): number {
        return this._saldo;
    }
    set setSaldo(valor: number) {
        this._saldo = valor;
    }
    get getNumero() {
        return this._numero;
    }

    private validarValor(valor: number) {
        if (valor <= 0) {
            throw new ValorInvalidoErro('Valor invalido.');
        }
    }

    public sacar(valor: number): void {
        this.validarValor(valor);
        if (this.getSaldo < valor) {
            throw new Error('Saldo insuficiente');
        }
        this.setSaldo = this.getSaldo - valor;
    }

    public depositar(valor: number): void {
        this.validarValor(valor);
        this.setSaldo = this.getSaldo + valor;
    }

    public transferir(conta: Conta, valor: number): void {
        this.sacar(valor);
        conta.depositar(valor);
    }
}

export { Conta }