import { VeiculoNaoEstacionadoErro } from "../excecoes/veiculoNaoEstacionadoErro";
import { Veiculo } from "./veiculo"
import moment from 'moment';
moment.locale('pt-br');

class VeiculoGoverno extends Veiculo {
    private _taxaDesconto: number;

    constructor(id: string, placa: string, modelo: string, ano: Date, taxaDesconto: number) {
        super(id, placa, modelo, ano);
        this._taxaDesconto = taxaDesconto;
    }

    public get getTaxaDesconto() {
        return this._taxaDesconto;
    }

    public retirar(dataHora: any, valorHora: number) {
        if (!this.getEstacionado) {
            throw new VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado.");
        }
        this.setDataHoraSaida = moment(dataHora);
        this.setEstacionado = false;
        this.setValor = this.calcularValor(valorHora);
    }

    public calcularValor(valorHora: number): number{
        //if (!this.getEstacionado) {
          //  throw new VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado.")
        //}
        return (this.calcularTempo() * valorHora) - this.calcularDesconto(valorHora);
    }

    public calcularDesconto(valorHora: number): number {
        return (this.calcularTempo() * valorHora) * this.getTaxaDesconto;
    }
}

export { VeiculoGoverno };