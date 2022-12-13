import { Veiculo } from "../entidades/veiculo";
import { InterfaceRepositorioGoverno } from "./interfaces/interfaceRepositorioGoverno";
import { RepositorioHistorico } from "./repositorioHistorico"

class RepositorioGoverno extends RepositorioHistorico implements InterfaceRepositorioGoverno {
    public excluirVeiculo(id: string): void {
        let indice = this.consultarIndiceVeiculo(id);
        for (let i = indice; i < this._veiculos.length; i++) {
            this._veiculos[i] = this._veiculos[i + 1];
        }
        this._veiculos.pop();
    }

    public excluirTodos(): void {
        this._veiculos = [];
    }
}

export { RepositorioGoverno }
