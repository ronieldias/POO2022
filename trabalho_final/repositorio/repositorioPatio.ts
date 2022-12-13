import { Veiculo } from "../entidades/veiculo";
import { VeiculoGoverno } from "../entidades/veiculoGoverno";
import { InterfaceRepositoPatio } from "./interfaces/interfaceRepositorioPatio";
import { RepositorioGoverno } from "./repositorioGoverno";

class RepositorioPatio extends RepositorioGoverno implements InterfaceRepositoPatio {
    public atualizarVeiculo(id: string, novoVeiculo: Veiculo): void {
        let indice = this.consultarIndiceVeiculo(id);
        this._veiculos[indice] = novoVeiculo;
    }

    /*public carregaArquivo(): void {
        let LineReaderSync = require("line-reader-sync");
        let lrs = new LineReaderSync("/home/roniel/Documentos/ifpi/poo/exercicios/TrabalhoFinal (V5)/build/repositorio/patio.txt");
        while (true) {
            let linha: string = lrs.readline();
            if (linha != null) {
                let arrayVeiculos: string[] = linha.split(';');
                let id: string = arrayVeiculos[0];
                let placa: string = arrayVeiculos[1];
                let modelo: string = arrayVeiculos[2];
                let ano: Date = new Date(arrayVeiculos[3]);
                let dataHoraEntrada: string = arrayVeiculos[4];
                let dataHoraSaida: string = arrayVeiculos[5];
                let estacionado: boolean = Boolean(arrayVeiculos[6]);
                let valor: number = parseFloat(arrayVeiculos[7]);
                let pagou: boolean = Boolean(arrayVeiculos[8]);
                let taxaDesconto: number = parseFloat(arrayVeiculos[9]);
                //console.log(arrayVeiculos.length);
                //let input = prompt()
                //let a = input('')
            
                if (arrayVeiculos.length == 10) {
                    let v = new Veiculo(id, placa, modelo, ano);
                    v.setDataHoraEntrada = dataHoraEntrada;
                    v.setDataHoraSaida = dataHoraSaida;
                    v.setEstacionado = estacionado;
                    v.setValor = valor;
                    v.setPagou = pagou;
                    this.inserirVeiculo(v);
                } else {
                    let v = new VeiculoGoverno(id, placa, modelo, ano, taxaDesconto);
                    v.setDataHoraEntrada = dataHoraEntrada;
                    v.setDataHoraSaida = dataHoraSaida;
                    v.setEstacionado = estacionado;
                    v.setValor = valor;
                    v.setPagou = pagou;
                    this.inserirVeiculo(v);
                }
            } else {
                break
            }
        }
    }*/
}

export { RepositorioPatio }