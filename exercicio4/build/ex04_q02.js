"use strict";
var Hotel = /** @class */ (function () {
    function Hotel(num) {
        this.quantReservas = num;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.quantReservas);
