import { AplicacaoErro } from "./aplicacaoErro";

class PatioLotadoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { PatioLotadoErro }