alert("Forma ou não um triangulo");

let base = parseFloat(prompt("Digite a largura da base"));
let lado1 = parseFloat(prompt("Digite a altura do primeiro lado"));
let lado2 = parseFloat(prompt("Digite a altura do segundo lado"));

if (lado2 < base + lado1 && lado1 < base + lado2 && base < lado1 + lado2) {
  alert("Esses valores é de um triangulo!");
} else {
  alert("Esses valores não correspondem a de um triangulo!");
}
