//Crie uma classe Human, com apenas uma propriedade: name.
//Esta propriedade deve ser privada e acessível apenas através de um getter e setter.
//Instancie um objeto desta classe e teste o getter e o setter.


// 1. Criamos a classe com a primeira letra maiúscula (boa prática em JS)
class Humano {
    // 2. Declaramos a propriedade privada #name aqui fora.
    // Ninguém consegue acessar ou mudar essa propriedade diretamente de fora da classe.
    
    #name

    // 3. O constructor roda IMEDIATAMENTE quando você faz "new humano(...)"
    // Ele pega o nome que você enviou e joga para dentro da propriedade privada #name
    constructor(name) {
        this.#name = name
    }

    // 4. GETTER: É a nossa "porta de saída". 
    // Como o #name é privado, o mundo exterior precisa chamar esse método para conseguir ver o valor.
    getName() {
        return this.#name;
    }

    // 5. SETTER: É a nossa "porta de entrada".
    // Ele serve para alterar o valor privado de forma controlada.
    // Ele obrigatoriamente precisa receber um dado de fora (o "novoNome") e aplicar na propriedade privada.
    setName(novoNome) {   
        this.#name = novoNome;
    }
}

// ================= TESTANDO O CÓDIGO =================

// 6. Criamos APENAS UM objeto (uma pessoa) chamado "pegaNome".
// Na memória, o JS cria o objeto e define o #name inicial como 'Alberto'.
const pegaNome = new Humano('Alberto');

// 7. Chamamos o GETTER. O método vai lá dentro, busca o #name ('Alberto') e joga no console. log.
console.log(pegaNome.getName()) // Saída no terminal: Alberto

// 8. Chamamos o SETTER. Passamos a string 'Alice' como argumento.
// O método lá dentro da classe faz: this.#name = 'Alice'. O Alberto deixa de existir nesse objeto.
pegaNome.setName('Alice');

// 9. Chamamos o GETTER novamente para checar se a mudança funcionou.
// O método vai lá dentro e traz o novo valor atualizado.
console.log(pegaNome.getName()); // Saída no terminal: Alice