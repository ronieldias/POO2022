import { Veiculo } from "../entidades/veiculo";
import { InterfaceRepositorioHistorico } from "./interfaces/interfaceRepositorioHistorico";

class RepositorioHistorico implements InterfaceRepositorioHistorico {
    protected _veiculos: Veiculo[] = [];

    public inserirVeiculo(veiculo: Veiculo): void {
        this._veiculos.push(veiculo);
    }

    public inserirNveiculos(veiculos: Array<Veiculo>): void {
        for (let i = 0; i < veiculos.length; i++) {
            this._veiculos.push(veiculos[i]);
        }
    }

    public consultarIndiceVeiculo(id: string): number {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (id == this._veiculos[i].getId) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    public consultarVeiculo(id: string): Veiculo {
        return this._veiculos[this.consultarIndiceVeiculo(id)];
    }

    public consultarPlaca(placa: string): Veiculo {
        let indice = -1;
        for (let i = 0; i < this._veiculos.length; i++) {
            if (placa == this._veiculos[i].getPlaca) {
                indice = i;
                break;
            }
        }
        return this._veiculos[indice];
    }

    public retornaTodos(): Array<Veiculo> {
        return this._veiculos;
    }
}
export { RepositorioHistorico }