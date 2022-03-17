// ------------------IMPORTANTO OS OUTROS ARQUIVOS COMO MÓDULOS ------------------------

import {Cliente}  from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// ------------------- CLIENTES ----------------------------------------------------

const cliente1 = new Cliente("Ricardo", 11122233309); // criando um cliente utilizando a classe Cliente.
const cliente2 = new Cliente("Alice",88822233309); // criando um cliente utilizando a classe Cliente.

// ------------------ CONTAS CORRENTES ----------------------------------------

const conta1 = new ContaCorrente(1001,cliente1); // CRIANDO UMA NOVA CONTA UTILIZANDO A CLASSE CONTA
const conta2 = new ContaCorrente(1002,cliente2); // CRIANDO UMA NOVA CONTA UTILIZANDO A CLASSE CONTA


//----------------- OPERAÇÕES BANCÁRIAS ---------------------------------------

conta1.depositar(500); // DEPOSITANDO NA CONTA1 UTILIZANDO A PROPRIEDADE .DEPOSITAR

console.log(conta1); // MOSTRANDO O CONTEUDO DA CONTA1
console.log(conta2); // MOSTRANDO O CONTEUDO DA CONTA2

conta1.transferir(200,conta2); // TRANSFERINDO UM VALOR DA CONTA1 PARA CONTA2

console.log(conta1); // MOSTRANDO O CONTEUDO DA CONTA1
console.log(conta2); // MOSTRANDO O CONTEUDO DA CONTA2

console.log(ContaCorrente.numeroDeContas);






