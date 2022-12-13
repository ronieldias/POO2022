import { AplicacaoErro } from "./aplicacaoErro";

class VeiculoNaoEstacionadoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { VeiculoNaoEstacionadoErro }