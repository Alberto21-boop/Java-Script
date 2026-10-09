//Crie uma classe que tenha 4 métodos estáticos:

//- sum(a, b)
//- subtract(a, b)
//- multiply(a, b)
//- divide(a, b)

//Cada método deve devolver a respectiva operação entre a e b.

//Teste todos os métodos com os valores 100 e 20.

class Aritimetica {
    static soma(a, b) {
        return a + b;
    }

    static subitracao(a, b) {
        return a - b;
    }

    static mutiplicacao(a, b) {
        return a * b;
    }

    static divisao(a, b) {
        return a / b; 
    }
}

const soma = Aritimetica.soma(100 , 20);
const subitracao = Aritimetica.subitracao(100, 20)
const mutipicacao = Aritimetica.mutiplicacao(100, 20);
const divisao = Aritimetica.divisao(100, 20);

console.log(soma);
console.log(subitracao);
console.log(mutipicacao);
console.log(divisao);