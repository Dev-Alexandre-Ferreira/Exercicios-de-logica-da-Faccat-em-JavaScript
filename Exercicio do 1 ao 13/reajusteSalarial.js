alert("Reajuste Salarial");

let salarioAtual = parseFloat(prompt("Informe o seu salario atual: "));
let perceReajuste = parseFloat(prompt("Informe o percentual de reajuste: "));

let novoSalario = (perceReajuste / 100) * salarioAtual + salarioAtual;

let formatado = novoSalario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
alert(`Seu novo salário é de ${formatado}`);
