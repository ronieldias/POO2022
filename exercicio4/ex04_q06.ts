class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor(l1: number, l2: number, l3: number) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    /*
    ehTriangulo():boolean{
        return (this.l1+this.l2 > this.l3) && (this.l1+this.l3 > this.l2) && (this.l2+this.l3 > this.l1);
    }
    */

    ehTriangulo(): boolean {
        return (this.l2 - this.l3) < this.l1 && this.l1 < (this.l2 + this.l3);
    }

    ehIsoceles(): boolean {
        if (this.ehTriangulo() == true) {
            return this.l1 == this.l2 || this.l1 == this.l3 || this.l3 == this.l2;
        }
        return false;
    }

    ehEquilatero(): boolean {
        if (this.ehTriangulo() == true) {
            return this.l1 == this.l2 && this.l1 == this.l3;
        }
        return false;
    }

    ehEscaleno(): boolean {
        if (this.ehTriangulo() == true) {
            return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;
        }
        return false;
    }
}

let t: Triangulo = new Triangulo(15, 16, 17);
console.log('Triangulo: ', t.ehTriangulo());
console.log('Equilatero: ', t.ehEquilatero());
console.log('Escaleno: ', t.ehEscaleno());
console.log('Isóceles: ', t.ehIsoceles());
