"use strict";
class Hora {
    constructor(_hora, _minuto, _segundo) {
        this._hora = _hora;
        this._minuto = _minuto;
        this._segundo = _segundo;
    }
    get hora() {
        return this._hora;
    }
    get minuto() {
        return this._minuto;
    }
    get segundo() {
        return this._segundo;
    }
    horaExata() {
        return `${this._hora}:${this._minuto}:${this._segundo}`;
    }
}
let relogio = new Hora(17, 30, 45);
console.log(relogio.horaExata());
