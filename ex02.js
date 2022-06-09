/* 
Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. 
Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, 
e caso não haja mais funcionários para cadastrar, 
ele deve chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
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

function exibeFuncionarios(cargo,listaFuncionarios,qtdFuncionarios){
    console.log(`Para o cargo de ${cargo}, temos ${qtdFuncionarios} funcionários!
    Sendo eles: `);
    for (let i = 0; i < listaFuncionarios.length; i++) {
        console.log(listaFuncionarios[i]);
    }
}

exibeFuncionarios('DIRETOR', diretores, qtdDiretores);
exibeFuncionarios('SUPERVISOR', supervisores, qtdSupervisores);
exibeFuncionarios('ASSISTENTES', assistentes, qtdAssistentes);