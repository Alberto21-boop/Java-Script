//Crie uma classe Animal apenas com duas propriedades: espécie e nome.
//Esta classe deve ter um método para mostrar ambas as propriedades:
//"Este animal é um(a) [espécie] e o seu nome é [nome]."

//Crie duas subclasses, Dog e Bird, que herdam da classe Animal.
//Instancie um objeto de cada classe e teste-os.


class Animal {
    constructor(especie, nome) {
        this.especie = especie;
        this.nome = nome;
    }

     apresentacao() {
        return 'Olá meu nome é ' + this.nome + ' e sou um ' + this.especie;
    }
}

class Dog extends Animal {

}

class Bird extends Animal {
    
}

const pegarCachorro = new Dog('Husky', 'Lestat');
const pegarPassaro = new Bird('Periquito', 'Glenda');

console.log(pegarCachorro.apresentacao());
console.log(pegarPassaro.apresentacao());


