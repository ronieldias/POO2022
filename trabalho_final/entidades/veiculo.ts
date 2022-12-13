import { JaEstaPagoErro } from '../excecoes/jaEstaPagoErro';
import { naoPagoErro } from '../excecoes/naoPagoErro';
import { VeiculoJaEstacionadoErro } from '../excecoes/veiculoJaEstacionadoErro';
import { VeiculoNaoEstacionadoErro } from '../excecoes/veiculoNaoEstacionadoErro';
import moment from 'moment';
moment.locale('pt-br');

class Veiculo {
    private _id: string;
    private _placa: string;
    private _modelo: string;
    private _ano: Date;
    private _dataHoraEntrada: any = null
    private _dataHoraSaida: any = null;
    private _estacionado: boolean = false;
    private _valor: number = 0;
    private _pagou: boolean = false;

    constructor(id: string, placa: string, modelo: string, ano: Date) {
        this._id = id;
        this._placa = placa;
        this._modelo = modelo;
        this._ano = ano;
    }

    // getters e setters
    public get getId() {
        return this._id;
    }
    public get getPlaca() {
        return this._placa;
    }
    public get getModelo() {
        return this._modelo;
    }
    public get getAno() {
        return this._ano;
    }

    public get getDataHoraEntrada() {
        return this._dataHoraEntrada;
    }
    protected set setDataHoraEntrada(dataHora: any) {
        this._dataHoraEntrada = dataHora;
    }
    public get getDataHoraSaida() {
        return this._dataHoraSaida;
    }
    protected set setDataHoraSaida(dataHora: any) {
        this._dataHoraSaida = dataHora;
    }
    public get getEstacionado() {
        return this._estacionado;
    }
    protected set setEstacionado(x: boolean) {
        this._estacionado = x;
    }
    public get getPagou() {
        return this._pagou;
    }
    protected set setPagou(x: boolean) {
        this._pagou = x;
    }
    public get getValor() {
        return this._valor;
    }
    protected set setValor(x: number) {
        this._valor = x;
    }

    public estacionar(dataHora: any) {
        if (this.getEstacionado) {
            throw new VeiculoJaEstacionadoErro("Erro: veiculo já está no pátio."); //excecao
        }
        this.setDataHoraEntrada = moment(dataHora);
        this.setEstacionado = true;
    }

    public retirar(dataHora: any, valorHora: number) {
        console.log('1', this.getEstacionado);
        if (!this.getEstacionado) {
            throw new VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado.");//excecao
        }
        if(!this.getPagou){
            throw new naoPagoErro("Erro: realize o pagamento para poder sair"); //excecao
        }
        this.setDataHoraSaida = moment(dataHora);
        this.setValor = this.calcularValor(valorHora); //exceção
        this.setEstacionado = false;
    }

    public calcularTempo(): number {
        let entrada = moment(this._dataHoraEntrada);
        let saida = moment(new Date());
        let duration = moment.duration(saida.diff(entrada));
        return Math.floor(duration.asHours()); //arredonda para baixo //opcao para cima Math.ceil()
    }

    public calcularValor(valorHora: number): number {
        if (!this.getEstacionado) {
            throw new VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado."); //excecao
        }
        return this.calcularTempo() * valorHora;
    }

    public pagar(valorHora: number) {
        if (this.getPagou) {
            throw new JaEstaPagoErro("Erro: debito já quitado."); //excecao
        }
        this.setValor = this.calcularValor(valorHora); //excecao
        this.setPagou = true;
    }
}

export { Veiculo }