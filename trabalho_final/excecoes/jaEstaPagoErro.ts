import { AplicacaoErro } from "./aplicacaoErro";

class JaEstaPagoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { JaEstaPagoErro }