alert("Vamos descobrir o tipo de Triângulo");

let a = parseFloat(prompt("Digite o tamanho da base"));
let b = parseFloat(prompt("Digite o tamanho do lado esquerdo"));
let c = parseFloat(prompt("Digite o tamanho do lado direito"));

if (a < b + c && b < a + c && c < a + b) {
  if (a == b && b == c) {
    alert("Triângulo Equilátero");
  } else if (a == b || b == c || a == c) {
    alert("Triângulo Isósceles");
  } else {
    alert("Triângulo Escaleno");
  }
} else {
  alert("Não foi possivel formar um Triângulo");
}
