alert("Salário extra por venda");

let salarioFixo = parseFloat(prompt("Digite seu salário fixo: "));
let totalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
let comissaoTres;
let comissaoCinco;
let salarioFinal;
let formatacao;
if (totalVendas <= 1500) {
  comissaoTres = (totalVendas * 3) / 100;
  salarioFinal = salarioFixo + comissaoTres;
} else {
  comissaoCinco = (totalVendas * 5) / 100;
  salarioFinal = salarioFixo + comissaoCinco;
}
alert(
  `Seu salário final é ${salarioFinal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`
);
