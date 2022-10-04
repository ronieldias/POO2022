"use strict";
var Triangulo = /** @class */ (function () {
    function Triangulo(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    /*
    ehTriangulo():boolean{
        return (this.l1+this.l2 > this.l3) && (this.l1+this.l3 > this.l2) && (this.l2+this.l3 > this.l1);
    }
    */
    Triangulo.prototype.ehTriangulo = function () {
        return (this.l2 - this.l3) < this.l1 && this.l1 < (this.l2 + this.l3);
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (this.ehTriangulo() == true) {
            return this.l1 == this.l2 || this.l1 == this.l3 || this.l3 == this.l2;
        }
        return false;
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.ehTriangulo() == true) {
            return this.l1 == this.l2 && this.l1 == this.l3;
        }
        return false;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.ehTriangulo() == true) {
            return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;
        }
        return false;
    };
    return Triangulo;
}());
var t = new Triangulo(15, 16, 17);
console.log('Triangulo: ', t.ehTriangulo());
console.log('Equilatero: ', t.ehEquilatero());
console.log('Escaleno: ', t.ehEscaleno());
console.log('Isóceles: ', t.ehIsoceles());
