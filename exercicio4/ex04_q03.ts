/*
Erro de compilação por conta da ausência de passagem de valor para o construtor, na istanciação
do objeto. Para solucionar basta setar um valor inicial para volume em r (Radio)
*/
class Radio {
    volume: number;
    
    constructor(volume: number) {
        this.volume = volume;
    }
}

/* implementação original
let r: Radio = new Radio(0);    
r.volume = 10;
*/

//implementação corrigida
let r: Radio = new Radio(0);    
r.volume = 10;


console.log(r.volume);
