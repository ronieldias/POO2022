import { Produto } from "./produto";

class ProdutoPerecivel extends Produto{
    private _dataValidade: Date;

    constructor(id: string, descricao: string, quantidade: number, valor: number, validade: string){
        super(id, descricao, quantidade, valor);
        this._dataValidade = new Date(validade);
    }

    public get getDataValidade(): string {
        return this._dataValidade.toString();
    }
    
    public estaValido(): boolean{
        let hoje = new Date();

        return hoje <= this._dataValidade;
    }

    public repor(quantidade: number): void{
        if(this.estaValido() == true){
            this.setQuantidadeEstoque = this.getQuantidadeEstoque + quantidade;
        }
    }

    public darBaixa(quantidade: number): void{
        if(this.getQuantidadeEstoque >= quantidade && this.estaValido() == true){
            this.setQuantidadeEstoque = this.getQuantidadeEstoque - quantidade;
        }
    }
}

export { ProdutoPerecivel }