// ------------------IMPORTANTO OS OUTROS ARQUIVOS COMO MÓDULOS ------------------------

import {Cliente}  from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Conta} from "./Conta.js";


// ------------------- CLIENTES ----------------------------------------------------

const cliente1 = new Cliente("Ricardo", 11122233309); // criando um cliente utilizando a classe Cliente.
const cliente2 = new Cliente("Alice",88822233309); // criando um cliente utilizando a classe Cliente.

// ------------------ CONTAS CORRENTES ----------------------------------------

const contaCorrente1 = new Conta(0,cliente1,1001); // CRIANDO UMA NOVA CONTA UTILIZANDO A CLASSE CONTA
const contaPoupanca1 = new Conta(0,cliente1,1001); // CRIANDO UMA NOVA CONTA UTILIZANDO A CLASSE CONTA


//----------------- OPERAÇÕES BANCÁRIAS ---------------------------------------

contaCorrente1.depositar(500); // DEPOSITANDO NA CONTA1 UTILIZANDO A PROPRIEDADE .DEPOSITAR
contaCorrente1.sacar(100);
console.log(contaCorrente1);
console.log(contaPoupanca1);







