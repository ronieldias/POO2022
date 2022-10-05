"use strict";
exports.__esModule = true;
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel(num) {
        this.quantReservas = num;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
exports.Hotel = Hotel;
var hotel = new Hotel(2);
console.log(hotel.quantReservas);
