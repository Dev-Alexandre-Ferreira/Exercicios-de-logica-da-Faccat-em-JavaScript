alert("Média de Aproveitamento");

let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));
let mediaExercicio = parseFloat(prompt("Digite a média dos exercicios: "));

let mediaAproveitamento;

mediaAproveitamento = (n1 + mediaExercicio + n2 * 2 + n3 * 3) / 7;

if (mediaAproveitamento >= 9) {
  alert("O você está com conceito: A ");
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
  alert("O você está com conceito: B ");
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
  alert("O você está com conceito: C ");
} else {
  alert("O você está com conceito: D ");
}
