import { AplicacaoErro } from "./aplicacaoErro";

class StatusRodadaErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { StatusRodadaErro }