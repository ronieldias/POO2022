import { AplicacaoErro } from "./aplicacaoErro";

class ContaInexistenteErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { ContaInexistenteErro }