alert("Número Positivio, Negativo ou Zero ?");

let numero = parseInt(prompt("Digite um número: "));

if (numero < 0) {
  alert("O número digitado é negativo!");
} else if (numero == 0) {
  alert("O número digitado é zero!");
} else {
  alert("O número digitado é Positivo!");
}
