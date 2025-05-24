alert("Aprovado ou Reprovado");

let notaUm = parseFloat(prompt("Digite a nota da primeira avaliação: "));
let notaDois = parseFloat(prompt("Digite a nota da segunda avaliação: "));

let media = (notaUm + notaDois) / 2;

if (media >= 6) {
  alert(`Aluno aprovado, a sua média é ${media}`);
} else {
  alert(`Aluno reprovado, a sua média é ${media}`);
}
