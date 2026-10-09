//Crie uma classe chamada Veiculo.

//Ela deve possuir duas propriedades:
//- modelo
//- potencia

//Crie um método chamado apresentar() que devolva a frase:

//"O veículo [modelo] possui [potencia] cavalos."

class Veiculo {
    constructor(modelo, potencia) {
        this.modelo = modelo;
        this.potencia = potencia;
    }

    apresentar() {
        return "O veículo " + this.modelo + " posui " + this.potencia + " cavalos."
    }
}

const carro = new Veiculo("Civic", 140)
console.log(carro.apresentar())
