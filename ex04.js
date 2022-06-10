/* 
Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma lista com todos os contatos.
Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato não exista.
Ao deletar, ele deve apagar o objeto com o nome passado.
Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o contato não exista
*/

const prompt = require("prompt-sync")();
console.clear();

const listaContatos = [];

const agendaTelefonica = {
    adicionar: function (nome, telefone) {
        const contato = {
            nome: nome,
            telefone: telefone,
        };
        listaContatos.push(contato);
    },
    alterar: function (nome, novoTelefone) {
        for (let i = 0; i < listaContatos.length; i++) {
            if (listaContatos[i].nome === nome) {
                listaContatos[i].telefone = novoTelefone;
            }
            break;
        }
        console.log("Contato inexistente");
    },
    deletar: function (nome) {
        for (let i = 0; i < listaContatos.length; i++) {
            if (listaContatos[i].nome === nome) {
                console.log(`Contato a ser deletado: ${listaContatos[i].nome}`);
                listaContatos.splice(i, 1);
            }
            break;
        }
        console.log("Contato inexistente");
    },
    consultar: function (nome) {
        for (let i = 0; i < listaContatos.length; i++) {
            if (listaContatos[i].nome === nome) {
                console.log(
                    `Nome: ${nome}, Telefone: ${listaContatos[i].telefone}`
                );
            }
            break;
        }
        console.log("Contato inexistente");
    },
};

agendaTelefonica.adicionar("Raul", 16992357214);
agendaTelefonica.adicionar("Gabriel", 16992357214);
agendaTelefonica.adicionar("Amanda", 16992357214);
agendaTelefonica.adicionar("Michel", 16992357214);
agendaTelefonica.adicionar("Gustavo", 16992357214);

agendaTelefonica.deletar("Gustavo");
