"use strict";
/*
- Não haverá erro na compilação somente da classe, entretanto todas as referências para quantReservas
serão sublinhadas em vermelho como aviso para a inicialização.
- No caso da instânciação de um objeto do tipo Hotel também não haverá erro de compilação.
- Entretanto, caso o método adicionaReserva() seja chamado, haverá sim um erro de compilação de fato,
pois a linguagem obriga a utilização do "this" para fazer referência à atributos da classe.
- Entrtanto², caso o this seja adicionado, o método estará interagindo com um atributo de
tipo indefinido, incrementando a ele o valor inteiro +1, que agora será tratado pelo compilador como
tipo inteiro, porém não numérico (NaN), compila sem erros, porém com falha na operação matemática.
*/
/*
class Hotel {
    quantReservas : number = 0;
    //quantReservas : number;
    
    adicionarReserva() : void {
        this.quantReservas++;
        //quantReservas++;
    }
}

let h : Hotel = new Hotel();
h.adicionarReserva();
console.log(h.quantReservas);
*/ 
