"use strict";
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, quantidadeCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return '[ID] ' + this.id + '\n' +
            '[Texto] ' + this.texto + '\n' +
            '[Likes] ' + this.quantidadeCurtidas + '\n' +
            '*********************************************\n';
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.consultar = function (id) {
        var postagemProcurada;
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == id) {
                postagemProcurada = p;
                break;
            }
        }
        return postagemProcurada;
    };
    Microblog.prototype.consultarIndice = function (id) {
        var indice = -1;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Microblog.prototype.incluir = function (postagemPassada) {
        if (this.consultar(postagemPassada.id)) {
            console.log("ERRO (MICROBLOD INCLUIR) - id ".concat(postagemPassada.id, " j\u00E1 percente a uma postagem existente\n"));
        }
        else {
            this.postagens.push(postagemPassada);
        }
    };
    Microblog.prototype.excluir = function (id) {
        var indice = this.consultarIndice(id);
        if (indice != -1) {
            for (var i = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    };
    Microblog.prototype.postagemMaisCurtida = function () {
        var maisCurtida = this.postagens[0];
        for (var i = 1; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = this.postagens[i];
            }
        }
        return maisCurtida;
    };
    Microblog.prototype.curtir = function (id) {
        var postagem = this.consultar(id);
        if (postagem) {
            postagem.curtir();
        }
    };
    Microblog.prototype.toString = function () {
        var concatena = '';
        for (var i = 0; i < this.postagens.length; i++) {
            concatena += '[ID] ' + this.postagens[i].id + '\n' +
                '[Texto] ' + this.postagens[i].texto + '\n' +
                '[Likes] ' + this.postagens[i].quantidadeCurtidas + '\n' +
                '*********************************************\n';
        }
        return concatena;
    };
    return Microblog;
}());
var p1 = new Postagem(1, '\nSudo apt get update\nSudo apt get update\nSudo apt get update', 0);
var p2 = new Postagem(2, '\nSudo apt get upgrade\nSudo apt get upgrade\nSudo apt get upgrade', 0);
var p3 = new Postagem(3, '\nReboot system now\nReboot system now\nReboot system now', 0);
var m1 = new Microblog();
m1.incluir(p1);
m1.incluir(p2);
m1.incluir(p3);
m1.curtir(1);
for (var i = 0; i < 50; i++) {
    m1.curtir(2);
}
console.log(m1.toString());
