//Você tem 3 animais de estimação: um gato, um cachorro e papagaio.
//Crie uma classe chamada Animal com as seguintes propriedades e métodos:
//- Propriedades: nome, peso e espécie.
//- Métodos: comer(), dormir() e brincar().
//- O método comer() deve receber um parâmetro que representa o tipo de alimento que o animal come.
//- O método brincar() deve receber um parâmetro que representa o tipo de brinquedo com o qual o animal brinca.
//- O método dormir() deve imprimir uma mensagem indicando que o animal está dormindo.
//- Crie três instâncias da classe Animal, uma para cada animal de estimação.

class Animal {
    constructor(nome, peso, especie) {
        this.nome = nome;
        this.peso = peso;
        this.especie = especie;
    }

    comer(racao) {
      return racao
    }

    dormir(dormindo) {
      return dormindo
    }

    brincar(bolinha) {
       return bolinha
    }
}

const Animal1 = new Animal('Maju', 25, 'cachorro')
const Animal2 = new Animal('Lestat', 19, 'gato')
const animal3 = new Animal('Dream', 20, 'papagaio') 

console.log('Eu sou o ', Animal1.nome, 'tenho ', Animal1.peso, ' kilos, e sou um ', Animal1.especie);
console.log('E a ', Animal1.nome, ' come a', Animal1.comer('racao'), ' gosta de ', 
    Animal1.brincar('brincar'), ' e estou', Animal1.dormir('dormindo'));