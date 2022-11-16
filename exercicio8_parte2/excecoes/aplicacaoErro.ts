class AplicacaoErro extends Error{
    constructor(message: string){
        super(message);
    }
}

export { AplicacaoErro }