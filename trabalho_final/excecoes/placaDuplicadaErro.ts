import { AplicacaoErro } from "./aplicacaoErro";

class PlacaDuplicadaErro extends AplicacaoErro{
    constructor(message: string){
        super(message);
    }
}

export { PlacaDuplicadaErro }