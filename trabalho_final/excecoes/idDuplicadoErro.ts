import { AplicacaoErro } from "./aplicacaoErro";

class IdDuplicadoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { IdDuplicadoErro }