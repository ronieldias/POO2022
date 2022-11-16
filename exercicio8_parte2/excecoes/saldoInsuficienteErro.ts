import { AplicacaoErro } from "./aplicacaoErro";

class SaldoInsuficienteErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { SaldoInsuficienteErro }