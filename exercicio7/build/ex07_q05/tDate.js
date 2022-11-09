"use strict";
/*
    Criei meu proprio tipo tDate, pois tive problemas com o tipo Date do TypeScript/JavaScript
    A ser melhorado:
        - entrada com string no formato 'dd-mm-aaa' na instanciação do objeto
    Problema:
        - caso o usuário entre com uma data inválida, os atributos _dia, _mes e _ano ficarão undefined
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.tDate = void 0;
class tDate {
    _dia;
    _mes;
    _ano;
    constructor(dia = new Date().getDate(), mes = new Date().getMonth() + 1, ano = new Date().getFullYear()) {
        if (this.dataValida(dia, mes, ano)) {
            this._dia = dia;
            this._mes = mes;
            this._ano = ano;
        }
    }
    get getDia() {
        return this._dia;
    }
    get getMes() {
        return this._mes;
    }
    get getAno() {
        return this._ano;
    }
    padraoBR() {
        return `${this.getDia}/${this.getMes}/${this.getAno}`;
    }
    porExtenso() {
        let nomeMes;
        switch (this.getMes) {
            case 1:
                nomeMes = 'Janeiro';
                break;
            case 2:
                nomeMes = 'Fevereiro';
                break;
            case 3:
                nomeMes = 'Março';
                break;
            case 4:
                nomeMes = 'Abril';
                break;
            case 5:
                nomeMes = 'Maio';
                break;
            case 6:
                nomeMes = 'Junho';
                break;
            case 7:
                nomeMes = 'Julho';
                break;
            case 8:
                nomeMes = 'Agosto';
                break;
            case 9:
                nomeMes = 'Setembro';
                break;
            case 10:
                nomeMes = 'Outubro';
                break;
            case 11:
                nomeMes = 'Novembro';
                break;
            case 12:
                nomeMes = 'Dezembro';
                break;
        }
        return `${this.getDia} de ${nomeMes} de ${this.getAno}`;
    }
    dataValida(dia, mes, ano) {
        let flag = false;
        if ((ano >= 1900 && ano <= 2100) && (mes >= 1 && mes <= 12)) {
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
                if (dia >= 1 && dia <= 31) {
                    flag = true;
                }
            }
            else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
                if (dia >= 1 && dia <= 30) {
                    flag = true;
                }
            }
            else {
                if ((this.ehBissexto(ano)) && (dia >= 1 && dia <= 29)) {
                    flag = true;
                }
                else if (!this.ehBissexto(ano) && (dia >= 1 && dia <= 28)) {
                    flag = true;
                }
            }
        }
        return flag;
    }
    ehBissexto(ano) {
        let flag = false;
        if ((ano % 4) == 0) {
            if ((ano % 10) == 0) {
                if ((ano % 400) == 0) {
                    flag = true;
                }
            }
            else {
                flag = true;
            }
        }
        return flag;
    }
}
exports.tDate = tDate;
