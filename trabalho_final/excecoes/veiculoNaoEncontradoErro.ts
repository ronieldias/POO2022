import { AplicacaoErro } from "./aplicacaoErro";

class VeiculoNaoEncontradoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { VeiculoNaoEncontradoErro }