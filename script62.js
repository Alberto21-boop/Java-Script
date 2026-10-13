//Depois crie uma classe chamada Carro que herde de Veiculo.

//A classe Carro deve possuir uma nova propriedade:
//- combustivel

//O constructor de Carro deve receber:
//- modelo
//- potencia
//- combustivel

//Utilize super() para enviar modelo e potencia para a classe Veiculo.


//Crie na classe Carro um método chamado detalhes().

//Este método deve chamar o método apresentar() herdado da classe Veiculo
//e acrescentar a seguinte informação:

//"e utiliza [combustivel] como combustível."

class Veiculo {
    constructor(modelo, potencia) {
    this.modelo = modelo;
    this.potencia = potencia;
   }

   apresentar() {
    return "O veiculo é um " + this.modelo + " e tem a potencia de " + this.potencia
   }
}

class Carro extends Veiculo {
    constructor(modelo, potencia, combustivel) {
        super(modelo, potencia)
        this.combustivel = combustivel;
    }

    detalhes() {
        return `${this.apresentar()}, e este carro tem o combustivel ${this.combustivel}`
    }
}

const CarroCompleto = new Carro("Civic", 140, "Flex")
const Civic = new Carro("Civic G9", 140, "Combustivel: Flex")
console.log(CarroCompleto.detalhes())
console.log(Civic.detalhes())