//Crie uma classe Human que tenha uma propriedade chamada name que seja privada.

//Crie um método chamado sayHello() que devolva:
//"Olá, o meu nome é [name]."

//O método sayHello() não deve conter esta implementação.

//Deve criar outro método chamado prepareStatement(), que seja um método privado
//e devolva o texto para o sayHello(), e o sayHello() deve chamar o
//prepareStatement() para devolver o seu texto.

class Humano {
    #nome

    constructor(nome) {
        this.#nome = nome;
    }

    #preparaFrase() {
        return "Olá, o meu nome é " + this.#nome
    }

    dizerOla() {
        return this.#preparaFrase()
    }
}

const apresetacao = new Humano('Alberto');
console.log(apresetacao.dizerOla())
