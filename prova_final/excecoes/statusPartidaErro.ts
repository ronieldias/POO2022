import { AplicacaoErro } from "./aplicacaoErro";

class StatusPartidaErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { StatusPartidaErro }