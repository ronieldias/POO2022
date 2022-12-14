import { AplicacaoErro } from "./aplicacaoErro";

class AnoInvalidoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { AnoInvalidoErro }