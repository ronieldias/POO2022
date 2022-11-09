"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPerecivel = void 0;
const produto_1 = require("./produto");
//import { tDate } from "./tDate";
class ProdutoPerecivel extends produto_1.Produto {
    _dataValidade;
    constructor(id, descricao, quantidade, valor, validade) {
        super(id, descricao, quantidade, valor);
        this._dataValidade = new Date(validade);
    }
    get getDataValidade() {
        return this._dataValidade.toString();
    }
    /*
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
    */
    estaValido() {
        let hoje = new Date();
        return hoje <= this._dataValidade;
    }
    repor(quantidade) {
        if (this.estaValido() == true) {
            this.setQuantidadeEstoque = this.getQuantidadeEstoque + quantidade;
        }
    }
    darBaixa(quantidade) {
        if (this.getQuantidadeEstoque >= quantidade && this.estaValido() == true) {
            this.setQuantidadeEstoque = this.getQuantidadeEstoque - quantidade;
        }
    }
}
exports.ProdutoPerecivel = ProdutoPerecivel;
