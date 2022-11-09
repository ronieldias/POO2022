import { Produto } from "./produto";
import { tDate } from "./tDate";

class ProdutoPerecivel extends Produto{
    private _dataValidade: tDate;

    constructor(id: string, descricao: string, quantidade: number, valor: number, validade: tDate){
        super(id, descricao, quantidade, valor);
        this._dataValidade = validade;
    }

    public get getDataValidade(): tDate {
        return this._dataValidade;
    }
    public get getValidadeStringBR(): string{
        return this.getDataValidade.padraoBR();
    }

    public estaValido(): boolean{
        let hoje : tDate = new tDate();

        if(this.getDataValidade.getAno > hoje.getAno){
            return true;
        }else if(this.getDataValidade.getAno < hoje.getAno){
            return false;
        }else{
            if(this.getDataValidade.getMes > hoje.getMes){
                return true;
            }else if(this.getDataValidade.getMes < hoje.getMes){
                return false;
            }else{
                if(this.getDataValidade.getDia >= hoje.getDia){
                    return true;
                }else{
                    return false;
                }
            }
        }  
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