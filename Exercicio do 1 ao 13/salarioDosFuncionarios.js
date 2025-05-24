alert("Salario final dos Funcionários");

let salarioFixo = parseFloat(prompt("Digite o valor do seu salario fixo: "));
let carrosVendidos = parseFloat(prompt("Digite o total de carros vendidos: "));
let totalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
let perceVendas = parseFloat(
  prompt("Digite o percentual que recebe por carros vendidos: ")
);

let taxaValorDasVendas = (5 / 100) * totalVendas;
let taxaFixa = (perceVendas / 100) * carrosVendidos;

let salarioFinal = salarioFixo + taxaFixa + taxaValorDasVendas;

let dados = salarioFinal.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});

alert(`O seu salário final é de ${dados} !`);
