import { AplicacaoErro } from "./aplicacaoErro";

class VeiculoJaEstacionadoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { VeiculoJaEstacionadoErro }