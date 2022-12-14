import { AplicacaoErro } from "./aplicacaoErro";

class CampoObrigatorioErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { CampoObrigatorioErro }