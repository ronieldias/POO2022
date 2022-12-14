import { Veiculo } from "./veiculo";
import { VeiculoGoverno } from "./veiculoGoverno";
import { VeiculoNaoEncontradoErro } from "../excecoes/veiculoNaoEncontradoErro";
import { IdDuplicadoErro } from "../excecoes/idDuplicadoErro";
import { PlacaDuplicadaErro } from "../excecoes/placaDuplicadaErro";
import { PatioLotadoErro } from "../excecoes/patioLotadoErro";
import { JaEstaPagoErro } from "../excecoes/jaEstaPagoErro";
import { RepositorioPatio } from "../repositorio/repositorioPatio";
import { RepositorioGoverno } from "../repositorio/repositorioGoverno";
import { RepositorioHistorico } from "../repositorio/repositorioHistorico";
import moment from 'moment';
moment.locale('pt-br');

class Estacionamento {
    private _id: string;
    private _valorHora: number;
    private _capacidade: number;
    private _taxaDescontoGov: number;
    private _total: number = 0;

    private _patio: RepositorioPatio = new RepositorioPatio();
    private _governo: RepositorioGoverno = new RepositorioGoverno();
    private _historico: RepositorioHistorico = new RepositorioHistorico();

    constructor(id: string, valorHora: number, capacidade: number, taxaDescGov: number) {
        this._id = id;
        this._valorHora = valorHora;
        this._capacidade = capacidade;
        this._taxaDescontoGov = taxaDescGov;
    }

    //getters e setters
    public get getId() {
        return this._id;
    }
    public get getValorHora() {
        return this._valorHora;
    }
    public get getCapacidade() {
        return this._capacidade;
    }
    public get getTaxaDescontoGov() {
        return this._taxaDescontoGov;
    }
    public get getTotal() {
        return this._total;
    }
    private set setTotal(x: number) {
        this._total = x;
    }

    public get getPatio() {
        return this._patio;
    }
    public get getGoverno() {
        return this._governo;
    }
    public get getHistorico() {
        return this._historico;
    }

    //demais metodos
    private idDuplicada(id: string): boolean {
        //patio
        if (this.getPatio.consultarIndiceVeiculo(id) != -1) { return true; }
        //governo
        if (this.getGoverno.consultarIndiceVeiculo(id) != -1) { return true; }
        //historico
        if (this.getHistorico.consultarIndiceVeiculo(id) != -1) { return true; }
        
        return false;
    }
    //corrigir!!!
    private placaDuplicada(placa: string): boolean {
        //patio
        if (this.getPatio.consultarPlaca(placa)) { return true; }
        //governo
        //if (this.getGoverno.consultarPlaca(placa)) { return true; }
        //historico
        //if (this.getHistorico.consultarPlaca(placa)) { return true; }

        return false;
    }

    public consultarID(id: string): Veiculo {
        let veiculoProcurado!: Veiculo;
        veiculoProcurado = this.getPatio.consultarVeiculo(id);
        if (!veiculoProcurado) {
            throw new VeiculoNaoEncontradoErro("Erro: veiculo nao encontrado."); //exceção
        }
        return veiculoProcurado;
    }

    public consultarPlaca(placa: string): Veiculo {
        let veiculoProcurado!: Veiculo;
        veiculoProcurado = this.getPatio.consultarPlaca(placa);
        if (!veiculoProcurado) {
            throw new VeiculoNaoEncontradoErro("Erro: veiculo nao encontrado."); //exceção
        }
        return veiculoProcurado;
    }

    public estacionar(veiculo: Veiculo) { //receber data e hora???
        if (this.getTotal == this.getCapacidade) { 
            throw new PatioLotadoErro("Erro: patio lotado."); //exceção
        }
        if (this.idDuplicada(veiculo.getId)) {
            throw new IdDuplicadoErro("Erro: ID duplicado no sistema."); //exceção
        }
        if (this.placaDuplicada(veiculo.getPlaca)) {
            throw new PlacaDuplicadaErro("Erro: placa duplicada no sistema."); //exceção
        }
        veiculo.estacionar(moment(new Date())); //COMENTAR PARA TESTE
        //veiculo.estacionar(moment(new Date("2022-12-11T22:00:00"))); //MANUAL. DESCOMENTAR TESTE
        this.getPatio.inserirVeiculo(veiculo);
        this.setTotal = this.getTotal + 1;
    }

    public retirar(id: string) {
        let veiculoProcurado = this.consultarID(id); //exceção

        if (veiculoProcurado instanceof VeiculoGoverno) { //se do tipo governo 
            if (veiculoProcurado.getPagou) { //se pagou
                this.getHistorico.inserirVeiculo(veiculoProcurado);
            } else { //se nao pagou
                this.getGoverno.inserirVeiculo(veiculoProcurado);
            }
            veiculoProcurado.retirar(moment(new Date()), this.getValorHora); //exceção
        } else { //se do tipo normal
            veiculoProcurado.retirar(moment(new Date()), this.getValorHora); //exceção
            this.getHistorico.inserirVeiculo(veiculoProcurado);
        }
        this.getPatio.excluirVeiculo(id); //remove do patio
        this.setTotal = this.getTotal - 1; //abre vaga no patio
    }

    public pagar(id: string) {
        let veiculoProcurado = this.consultarID(id); //exceção
        veiculoProcurado.pagar(this.getValorHora);
    }

    public calcularTempo(id: string): number {
        let tempo = 0;
        let veiculoProcurado = this.consultarID(id); //excecao
        tempo = veiculoProcurado.calcularTempo();
        return tempo;
    }

    public calcularValor(id: string): number {
        let valor = 0;
        let veiculoProcurado = this.consultarID(id); //excecao
        valor = veiculoProcurado.calcularValor(this.getValorHora); //exceção
        return valor;
    }

    public calcularDebitoGoverno(): number {
        let arrayAux = this.getGoverno.retornaTodos();
        if(arrayAux.length == 0){
            throw new JaEstaPagoErro("Erro: Não há débitos para quitar :)"); //exceção
        }
        let valor = 0;
        for(let i = 0; i<arrayAux.length; i++){
            valor += arrayAux[i].getValor;
        }
        return valor;
    }

    public pagarDebitoGoverno() {
        let arrayAux = this.getGoverno.retornaTodos();
        if(arrayAux.length == 0){
            throw new JaEstaPagoErro("Erro: Não há débitos para quitar :)"); //exceção
        }
        for (let i = 0; i<arrayAux.length; i++) {
            arrayAux[i].pagar(this.getValorHora); //exceção
        }
        this.getHistorico.inserirNveiculos(arrayAux);
        this.getGoverno.excluirTodos();
    }
}

export { Estacionamento }