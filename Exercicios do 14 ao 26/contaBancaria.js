alert("Bem-vindo a conta Bancaria");

let contaCliente = parseFloat(prompt("Digite o número da sua conta: "));
let saldoCliente = parseFloat(prompt("Digite o valor do seu saldo: "));
let valorEmDebito = parseFloat(prompt("Digite o valor do seu débito: "));
let valorCredito = parseFloat(prompt("Digite o valor do seu crédito: "));

let saldoAtual = saldoCliente - valorEmDebito + valorCredito;

if (saldoAtual >= 0) {
  alert("Seu saldo é Positivo!");
} else {
  alert("Seu saldo é Negativo!");
}
