import { AplicacaoErro } from "./aplicacaoErro";

class ValorInvalidoErro extends AplicacaoErro {
    constructor(message: string) {
        super(message);
    }
}

export { ValorInvalidoErro }