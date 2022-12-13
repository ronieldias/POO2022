import { Veiculo } from "../../entidades/veiculo"

interface InterfaceRepositorioHistorico {
    inserirVeiculo(veiculo: Veiculo): void;
    consultarIndiceVeiculo(id: string): number;
    consultarVeiculo(id: string): Veiculo;
    consultarPlaca(placa: string): Veiculo;
}

export { InterfaceRepositorioHistorico }