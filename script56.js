//Crie uma classe Human com as propriedades nome e idade.
//A classe deve conter um método que devolva a frase:
//"Olá, o meu nome é [nome] e tenho [idade] anos."
//Crie dois objetos desta classe e teste o método criado.

class humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    nomeDaPessoa() {
        return this.nome 
    }

    idadeDaPessoa() {
        return this.idade
    }

    apresentarPessoa() {
        return 'Olá, o meu nome é ' + this.nomeDaPessoa() + ' e tenho ' + this.idadeDaPessoa() + ' anos'
    }
}

const pessoa = new humano('Alberto', 45);

console.log(pessoa.apresentarPessoa(pessoa))