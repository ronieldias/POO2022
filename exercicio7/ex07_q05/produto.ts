class Produto{
    private _id: string;
    private _descricao: string;
    private _quantidadeEstoque: number;
    private _valorUnitario: number;

    constructor(id: string, descricao: string, quantidade: number, valor: number){
        this._id = id;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidade;
        this._valorUnitario = valor;
    }

    public get getId(): string{
        return this._id;
    }
    public get getDescricao(): string{
        return this._descricao;
    }
    public get getValorUnitario(): number{
        return this._valorUnitario;
    }
    
    public get getQuantidadeEstoque(): number{
        return this._quantidadeEstoque;
    }
    public set setQuantidadeEstoque(valor:number){
        this._quantidadeEstoque = valor;
    }

    public repor(quantidade: number): void{
        this.setQuantidadeEstoque = this.getQuantidadeEstoque + quantidade;
    }

    public darBaixa(quantidade: number): void{
        if(this.getQuantidadeEstoque >= quantidade){
            this.setQuantidadeEstoque = this.getQuantidadeEstoque - quantidade;
        }
    }
}
export { Produto }