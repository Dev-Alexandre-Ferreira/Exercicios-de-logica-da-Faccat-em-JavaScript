alert("Soma do maior");

let primeiro = parseInt(prompt("Digite o primeiro numero: "));
let segundo = parseInt(prompt("Digite o segundo numero: "));
let terceiro = parseInt(prompt("Digite o terceiro numero: "));
let soma;

if (primeiro > segundo && segundo > terceiro) {
  soma = primeiro + segundo;
  alert(`A soma dos maiores é ${soma} !`);
} else if (primeiro > terceiro && terceiro > segundo) {
  soma = primeiro + terceiro;
  alert(`A soma dos maiores é ${soma} !`);
} else if (segundo > terceiro && terceiro > primeiro) {
  soma = segundo + terceiro;
  alert(`A soma dos maiores é ${soma} !`);
} else if (segundo > primeiro && primeiro > terceiro) {
  soma = segundo + primeiro;
  alert(`A soma dos maiores é ${soma} !`);
} else if (terceiro > primeiro && primeiro > segundo) {
  soma = terceiro + primeiro;
  alert(`A soma dos maiores é ${soma} !`);
} else if (terceiro > segundo && segundo > primeiro) {
  soma = terceiro + segundo;
  alert(`A soma dos maiores é ${soma} !`);
}
