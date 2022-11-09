class Empregado {
    private _salario: number = 500;
    
    public calcularSalario(): number {
        return this._salario;
    }
}

class Diarista extends Empregado {
    public calcularSalario(): number {
        return super.calcularSalario() / 30;
    }
}

class Horista extends Diarista {
    public calcularSalario(): number {
        return super.calcularSalario() / 24;
    }
}