/*
Sim haverá dois erros de compilação:
    - O primeiro em virtude da não inicializaçao do atributo quantReservas e inexistência de um construtor 
    para que o atributo possa ser inicializado na instanciação de um objeto do tipo Hotel.
    - O segundo no método adicionarReserva(), onde quantReservas deveria ser precedido do 'this', para refe-
    renciar o atributo da própria classe.
*/

/* IMPLEMENTAÇÃO ORIGINAL
class Hotel {
    quantReservas : number;
    //quantReservas : number = 0;
    
    adicionarReserva() : void {
        //this.quantReservas++;
        quantReservas++;
    }
}
*/

// IMPLEMENTAÇÃO CORRIGIDA
class Hotel {
    quantReservas : number = 0;
    
    adicionarReserva() : void {
        this.quantReservas++;
    }
}
/*
let h : Hotel = new Hotel();
h.adicionarReserva();
console.log(h.quantReservas);
*/
