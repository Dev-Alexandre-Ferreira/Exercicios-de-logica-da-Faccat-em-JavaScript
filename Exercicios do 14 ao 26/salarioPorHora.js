alert("Salario por hora mais extra");

let horasTrabalhadas = parseFloat(
  prompt("Digite quantas horas você trabalhou esse mês: ")
);

let salarioHora = parseFloat(
  prompt("Digite o valor do seu salário por hora: ")
);

let novoSalario;
let baseSalario;
let extra;

if (horasTrabalhadas <= 160) {
  novoSalario = horasTrabalhadas * salarioHora;
} else if (horasTrabalhadas > 160) {
  baseSalario = 160 * salarioHora;
  extra = (horasTrabalhadas - 160) * salarioHora + salarioHora / 2;
  novoSalario = baseSalario + extra;
}

alert(
  `Seu novo sálario é ${novoSalario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`
);
