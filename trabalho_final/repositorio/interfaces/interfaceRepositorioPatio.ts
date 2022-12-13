import { Veiculo } from "../../entidades/veiculo"

interface InterfaceRepositoPatio {
    atualizarVeiculo(id: string, novoVeiculo: Veiculo): void;
}

export { InterfaceRepositoPatio }