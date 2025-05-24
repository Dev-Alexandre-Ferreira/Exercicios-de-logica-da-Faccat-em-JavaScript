alert("Idade convertida em dias");

let anoNascimento = parseInt(prompt("Informe quantos anos você tem: "));

let mesesPassados = parseInt(
  prompt(
    "Informe quantos meses completos se passaram desde seu ultimo aniversário: "
  )
);

let diaAtual = parseInt(prompt("informe que dia do mês é hoje: "));

let anosParaDias = anoNascimento * 365;

let mesParaDias = mesesPassados * 30;

let anosEmDias = anosParaDias + mesParaDias + diaAtual;

alert(`Você tem ${anosEmDias} dias de vida !`);
