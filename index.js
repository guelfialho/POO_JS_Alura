// ------------------IMPORTANTO OS OUTROS ARQUIVOS COMO MÓDULOS ------------------------

import {Cliente}  from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// ------------------- CLIENTES ----------------------------------------------------

const cliente1 = new Cliente(); // criando um cliente utilizando a classe Cliente.
cliente1.nome = "Ricardo"; // atribuindo na propriedade nome do cliente1 a string contendo o nome do cliente.
cliente1.cpf = 11122233309; // atribuindo na propriedade cpf do cliente1 a string contendo o cpf do cliente.

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// ------------------ CONTAS CORRENTES ----------------------------------------

const conta1 = new ContaCorrente(); // CRIANDO UMA NOVA CONTA UTILIZANDO A CLASSE CONTA
conta1.cliente = cliente1; // ATRIBUINDO O OBJETO CLIENTE QUE SERÁ DONO DA CONTA 
conta1.agencia = 1001; // ATRIBUINDO A AGENCIA DA CONTA

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

//----------------- OPERAÇÕES BANCÁRIAS ---------------------------------------

conta1.depositar(500); // DEPOSITANDO NA CONTA1 UTILIZANDO A PROPRIEDADE .DEPOSITAR

console.log(conta1); // MOSTRANDO O CONTEUDO DA CONTA1
console.log(conta2); // MOSTRANDO O CONTEUDO DA CONTA2

conta1.transferir(200,conta2); // TRANSFERINDO UM VALOR DA CONTA1 PARA CONTA2

console.log(conta1); // MOSTRANDO O CONTEUDO DA CONTA1
console.log(conta2); // MOSTRANDO O CONTEUDO DA CONTA2






