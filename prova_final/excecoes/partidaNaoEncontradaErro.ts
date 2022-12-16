import { AplicacaoErro } from "./aplicacaoErro";

class PartidaNaoEncontradaErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { PartidaNaoEncontradaErro }