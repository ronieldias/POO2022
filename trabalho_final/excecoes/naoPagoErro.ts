import { AplicacaoErro } from "./aplicacaoErro";

class naoPagoErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { naoPagoErro }