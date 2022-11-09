import { Produto } from "./produto";
import { ProdutoPerecivel } from "./produtoPerecivel";

class Estoque{
    private _produtos: Produto[] = [];

    public inserir(produtoPassado: Produto): void{
        if (!this.consultar(produtoPassado.getId)) {
            this._produtos.push(produtoPassado);
        }
    }

    public consultar(idPassado: string): Produto{
        let produtoProcurado !: Produto;

        for (let p of this._produtos){
            if(p.getId == idPassado){
                produtoProcurado = p;
                break;
            }
        }
        return produtoProcurado;
    }

    public excluir(idPassado: string): void{
        for(let i = 0; i < this._produtos.length; i++){
            if(this._produtos[i].getId == idPassado){
                for(let j = i; j < this._produtos.length; j++){
                    this._produtos[j] = this._produtos[j+1];
                }
                break;
            }
        }
        this._produtos.pop();
    }

    public repor(idPassado: string, quantidade: number){
        let produtoProcurado : Produto = this.consultar(idPassado);

        if(produtoProcurado != null){
            produtoProcurado.repor(quantidade);
        }
    }

    public darBaixa(idPassado: string, quantidade: number){
        let produtoProcurado : Produto = this.consultar(idPassado);

        if(produtoProcurado != null){
            produtoProcurado.darBaixa(quantidade);
        }
    }

    public pereciveisVencidos(): Array<ProdutoPerecivel>{
        let produtosVencidos: ProdutoPerecivel[] = [];

        for (let p of this._produtos){
            if(p instanceof ProdutoPerecivel){
                if (!p.estaValido()){
                    produtosVencidos.push(p);
                }
            }
        }

        return produtosVencidos;
    }
}

export { Estoque }