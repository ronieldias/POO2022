import { AplicacaoErro } from "./aplicacaoErro";

class OpcaoInvalidaErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { OpcaoInvalidaErro }