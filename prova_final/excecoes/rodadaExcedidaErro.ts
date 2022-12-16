import { AplicacaoErro } from "./aplicacaoErro";

class RodadaExcedidaErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { RodadaExcedidaErro }