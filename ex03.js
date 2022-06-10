/*
Implementando o exercício anterior, 
escreva uma função que deve calcular um aumento de salário baseado no cargo. 
Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. 
Após isso, aplique esse aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.
*/
const prompt = require("prompt-sync")();
console.clear();

let cadastroFuncionarios = true;
const listaFuncionarios = [];

while (cadastroFuncionarios) {
    let nome = prompt("Digite o nome do funcionário: ").toUpperCase();
    let cargo = prompt("Digite o cargo do funcionário: ").toUpperCase();
    let salario = +prompt("Digite o salário do funcionário: ");
    const funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario,
    };
    listaFuncionarios.push(funcionario);
    let continuarCadastro = prompt(
        "Deseja continuar o cadastro? (S/N)"
    ).toUpperCase();
    if (continuarCadastro === "N") {
        cadastroFuncionarios = false;
    }
}

let qtdDiretores = 0;
let qtdSupervisores = 0;
let qtdAssistentes = 0;

let diretores = [];
let supervisores = [];
let assistentes = [];

for (let i = 0; i < listaFuncionarios.length; i++) {
    if (listaFuncionarios[i].cargo === "DIRETOR") {
        diretores.push(listaFuncionarios[i].nome);
        qtdDiretores++;
    } else if (listaFuncionarios[i].cargo === "SUPERVISOR") {
        qtdSupervisores++;
        supervisores.push(listaFuncionarios[i].nome);
    } else if (listaFuncionarios[i].cargo === "ASSISTENTE") {
        assistentes.push(listaFuncionarios[i].nome);
        qtdAssistentes++;
    }
}

function exibeFuncionarios(cargo, listaFuncionarios, qtdFuncionarios) {
    console.log(`Para o cargo de ${cargo}, temos ${qtdFuncionarios} funcionários!
    Sendo eles: `);
    for (let i = 0; i < listaFuncionarios.length; i++) {
        console.log(listaFuncionarios[i]);
    }
}

function aumentaSalarios(cargo, taxaDeAumento) {
    for (let i = 0; i < listaFuncionarios.length; i++) {
        if (listaFuncionarios[i].cargo === cargo) {
            listaFuncionarios[i].salario =
                listaFuncionarios[i].salario +
                listaFuncionarios[i].salario * taxaDeAumento;
        }
        console.log(`O funcionario ${listaFuncionarios[i].nome} agora tem seu salario no valor de R$ ${listaFuncionarios[i].salario}`);
    }
}

aumentaSalarios('ASSISTENTE', 0.2);
