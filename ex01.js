/* 
Crie um objeto pessoa com os atributos: nome, idade, peso e altura. 
Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. 
Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. 
Crie um método bio que retorna uma string com todas as informações da pessoa.
*/

const prompt = require("prompt-sync")();
console.clear();

let nomePrompt = prompt("Digite o nome da pessoa: ");
let idadePrompt = +prompt("Digite a idade da pessoa: ");
let pesoPrompt = +prompt("Digite o peso da pessoa: ");
let alturaPrompt = +prompt("Digite a altura da pessoa: ");

const pessoa = {
    nome: nomePrompt,
    idade: idadePrompt,
    peso: pesoPrompt,
    altura: alturaPrompt,
    envelhecer: function (valor) {
        this.idade = this.idade + valor;
    },
    engordar: function (valor) {
        this.peso = this.peso + valor;
    },
    emagrecer: function (valor) {
        this.peso = this.peso - valor;
    },
    crescer: function () {
        if (this.idade <= 21) {
            this.altura = this.altura + 0.5;
        }
    },
    bio: function () {
        return `
        Nome: ${this.nome}, 
        Idade; ${this.idade}, 
        Peso: ${this.peso}, 
        Altura: ${this.altura}`;
    },
};

let pessoa1 = pessoa;
console.log(pessoa1.bio());
