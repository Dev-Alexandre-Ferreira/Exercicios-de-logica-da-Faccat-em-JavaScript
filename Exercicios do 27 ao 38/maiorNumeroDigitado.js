alert("Qual o maior numero?");

let primeiro = parseInt(prompt("Digite o primeiro numero: "));
let segundo = parseInt(prompt("Digite o segundo numero: "));
let terceiro = parseInt(prompt("Digite o terceiro numero: "));
let soma;

if (primeiro > segundo && primeiro > terceiro) {
  alert(`O maior número digitado é ${primeiro}!`);
} else if (segundo > primeiro && segundo > terceiro) {
  alert(`O maior número digitado é ${segundo}!`);
} else {
  alert(`O maior número digitado é ${terceiro}!`);
}
