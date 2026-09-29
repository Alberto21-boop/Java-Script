//Vamos imaginar que temos uma classe que simboliza uma conta bancária.
//A classe vai ter uma propriedade privada: #saldo.
//Vai ter um método para sacar dinheiro: sacarDinheiro(valor).
//O método vai controlar se o valor a sacar é maior que o saldo disponível.

//O nome das classes deve começar com letra maiúscula.


class contaBancaria {
    #saldo;
    constructor(nome, saldo) {
        this.nome = nome;
        this.#saldo = saldo;
    }

    getSaldo() {
        return this.#saldo;
    }
    
    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor 
            console.log('Saque realizado com sucesso !')
            return true

        } else {
            console.log('Saldo insuficiente !')
            return false
        }
    }

}

const minhaConta = new contaBancaria('Alberto', 1000);

minhaConta.sacar(200); 
console.log(minhaConta.getSaldo()); 