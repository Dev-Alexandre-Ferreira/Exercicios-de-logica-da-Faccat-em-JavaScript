alert("Qual o maior numero?");

let primeiro = parseInt(prompt("Digite o primeiro numero: "));
let segundo = parseInt(prompt("Digite o segundo numero: "));
let terceiro = parseInt(prompt("Digite o terceiro numero: "));
let soma;

if (primeiro > segundo && segundo > terceiro) {
  soma = primeiro + segundo;
  alert(
    `Os numeros do maior para o menor são ${primeiro}, ${segundo}, ${terceiro} e a soma dos maiores é ${soma} !`
  );
} else if (primeiro > terceiro && terceiro > segundo) {
  soma = primeiro + terceiro;
  alert(
    `Os numeros do maior para o menor são ${primeiro}, ${terceiro}, ${segundo} e a soma dos maiores é ${soma} !`
  );
} else if (segundo > terceiro && terceiro > primeiro) {
  soma = segundo + terceiro;
  alert(
    `Os numeros do maior para o menor são ${segundo}, ${terceiro}, ${primeiro} e a soma dos maiores é ${soma} !`
  );
} else if (segundo > primeiro && primeiro > terceiro) {
  soma = segundo + primeiro;
  alert(
    `Os numeros do maior para o menor são ${segundo}, ${primeiro}, ${terceiro} e a soma dos maiores é ${soma} !`
  );
} else if (terceiro > primeiro && primeiro > segundo) {
  soma = terceiro + primeiro;
  alert(
    `Os numeros do maior para o menor são ${terceiro}, ${primeiro}, ${segundo} e a soma dos maiores é ${soma} !`
  );
} else if (terceiro > segundo && segundo > primeiro) {
  soma = terceiro + segundo;
  alert(
    `Os numeros do maior para o menor são ${terceiro}, ${segundo}, ${primeiro} e a soma dos maiores é ${soma} !`
  );
}
