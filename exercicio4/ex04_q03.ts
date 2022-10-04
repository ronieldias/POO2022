/*
Erro de compilação por conta da ausência de passagem de valor inicial para o construtor na istanciação
do objeto. Para solucionar basta setar um volume inicial para o rádio r
*/
class Radio {
    volume: number;
    
    constructor(volume: number) {
        this.volume = volume;
    }
}

let r: Radio = new Radio(0);
r.volume = 10;
console.log(r.volume);
