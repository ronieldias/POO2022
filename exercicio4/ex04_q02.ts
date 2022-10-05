class Hotel {
    quantReservas : number;

    constructor(num: number){
        this.quantReservas = num;
    }

    adicionarReserva() : void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

export{Hotel}