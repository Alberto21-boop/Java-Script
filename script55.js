//Crie uma classe simples com duas propriedades, nome e apelido, e um método que
//devolva o nome completo. Instancie esta classe e teste o seu método.


class eu {
    constructor(nome, apelido) {
        this.nome = nome
        this.apelido = apelido
    }

    meApresentar() {
        return console.log('Olá eu me chamo ' + this.nome + ' e meu apelido é ' + this.apelido);
    }

}

const Alberto = new eu('Alberto Campos Barbosa', 'Beto');
Alberto.meApresentar();
