alert("Número em ordem crescente");

let primeiro = parseInt(prompt("Digite o primeiro numero: "));
let segundo = parseInt(prompt("Digite o segundo numero: "));
let terceiro = parseInt(prompt("Digite o terceiro numero: "));

if (primeiro > segundo && segundo > terceiro) {
  alert(
    `Os numeros em ordem crescente são ${terceiro}, ${segundo}, ${primeiro}!`
  );
} else if (primeiro > terceiro && terceiro > segundo) {
  alert(
    `Os numeros em ordem crescente são ${segundo}, ${terceiro}, ${primeiro}!`
  );
} else if (segundo > terceiro && terceiro > primeiro) {
  alert(
    `Os numeros em ordem crescente são ${primeiro}, ${terceiro}, ${segundo}!`
  );
} else if (segundo > primeiro && primeiro > terceiro) {
  alert(
    `Os numeros em ordem crescente são ${terceiro}, ${primeiro}, ${segundo}!`
  );
} else if (terceiro > primeiro && primeiro > segundo) {
  alert(
    `Os numeros em ordem crescente são ${segundo}, ${primeiro}, ${terceiro}!`
  );
} else if (terceiro > segundo && segundo > primeiro) {
  alert(
    `Os numeros em ordem crescente são ${primeiro}, ${segundo}, ${terceiro}!`
  );
}
